import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
 * @see routes/web.php:36
 * @route '/locale/{locale}'
 */
export const switchMethod = (args: { locale: string | number } | [locale: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: switchMethod.url(args, options),
    method: 'post',
})

switchMethod.definition = {
    methods: ["post"],
    url: '/locale/{locale}',
} satisfies RouteDefinition<["post"]>

/**
 * @see routes/web.php:36
 * @route '/locale/{locale}'
 */
switchMethod.url = (args: { locale: string | number } | [locale: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { locale: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    locale: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        locale: args.locale,
                }

    return switchMethod.definition.url
            .replace('{locale}', parsedArgs.locale.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see routes/web.php:36
 * @route '/locale/{locale}'
 */
switchMethod.post = (args: { locale: string | number } | [locale: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: switchMethod.url(args, options),
    method: 'post',
})

    /**
 * @see routes/web.php:36
 * @route '/locale/{locale}'
 */
    const switchMethodForm = (args: { locale: string | number } | [locale: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: switchMethod.url(args, options),
        method: 'post',
    })

            /**
 * @see routes/web.php:36
 * @route '/locale/{locale}'
 */
        switchMethodForm.post = (args: { locale: string | number } | [locale: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: switchMethod.url(args, options),
            method: 'post',
        })
    
    switchMethod.form = switchMethodForm
const locale = {
    switch: Object.assign(switchMethod, switchMethod),
}

export default locale