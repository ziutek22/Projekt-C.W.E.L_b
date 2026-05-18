FROM php:8.4-fpm

# Zależności systemowe
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    libzip-dev \
    zip \
    unzip \
    && docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd zip \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Node.js + npm
RUN curl -fsSL https://deb.nodesource.com/setup_22.x | bash - \
    && apt-get install -y nodejs

# Katalog roboczy
WORKDIR /var/www

# Kopiuj pliki projektu
COPY . .

# Zależności PHP
RUN composer install --no-dev --optimize-autoloader

# Zależności JS i build frontendu
RUN npm install
RUN php artisan wayfinder:generate || true
RUN echo "export default {};" > resources/js/actions/App/Http/Controllers/Settings/SecurityController.ts
RUN mkdir -p resources/js/routes/security && echo "export const edit = () => '/settings/security';" > resources/js/routes/security/index.ts
RUN npm run build

# Uprawnienia storage
RUN chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache \
    && chmod -R 775 /var/www/storage /var/www/bootstrap/cache

EXPOSE 9000
CMD ["php-fpm"]
