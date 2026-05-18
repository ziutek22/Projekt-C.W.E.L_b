import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\VulnerabilityController::fetchNvd
 * @see app/Http/Controllers/VulnerabilityController.php:114
 * @route '/vulnerabilities/fetch-nvd'
 */
export const fetchNvd = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: fetchNvd.url(options),
    method: 'post',
})

fetchNvd.definition = {
    methods: ["post"],
    url: '/vulnerabilities/fetch-nvd',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\VulnerabilityController::fetchNvd
 * @see app/Http/Controllers/VulnerabilityController.php:114
 * @route '/vulnerabilities/fetch-nvd'
 */
fetchNvd.url = (options?: RouteQueryOptions) => {
    return fetchNvd.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\VulnerabilityController::fetchNvd
 * @see app/Http/Controllers/VulnerabilityController.php:114
 * @route '/vulnerabilities/fetch-nvd'
 */
fetchNvd.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: fetchNvd.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\VulnerabilityController::fetchNvd
 * @see app/Http/Controllers/VulnerabilityController.php:114
 * @route '/vulnerabilities/fetch-nvd'
 */
    const fetchNvdForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: fetchNvd.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\VulnerabilityController::fetchNvd
 * @see app/Http/Controllers/VulnerabilityController.php:114
 * @route '/vulnerabilities/fetch-nvd'
 */
        fetchNvdForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: fetchNvd.url(options),
            method: 'post',
        })
    
    fetchNvd.form = fetchNvdForm
/**
* @see \App\Http\Controllers\VulnerabilityController::index
 * @see app/Http/Controllers/VulnerabilityController.php:20
 * @route '/vulnerabilities'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/vulnerabilities',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\VulnerabilityController::index
 * @see app/Http/Controllers/VulnerabilityController.php:20
 * @route '/vulnerabilities'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\VulnerabilityController::index
 * @see app/Http/Controllers/VulnerabilityController.php:20
 * @route '/vulnerabilities'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\VulnerabilityController::index
 * @see app/Http/Controllers/VulnerabilityController.php:20
 * @route '/vulnerabilities'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\VulnerabilityController::index
 * @see app/Http/Controllers/VulnerabilityController.php:20
 * @route '/vulnerabilities'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\VulnerabilityController::index
 * @see app/Http/Controllers/VulnerabilityController.php:20
 * @route '/vulnerabilities'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\VulnerabilityController::index
 * @see app/Http/Controllers/VulnerabilityController.php:20
 * @route '/vulnerabilities'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\VulnerabilityController::create
 * @see app/Http/Controllers/VulnerabilityController.php:31
 * @route '/vulnerabilities/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/vulnerabilities/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\VulnerabilityController::create
 * @see app/Http/Controllers/VulnerabilityController.php:31
 * @route '/vulnerabilities/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\VulnerabilityController::create
 * @see app/Http/Controllers/VulnerabilityController.php:31
 * @route '/vulnerabilities/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\VulnerabilityController::create
 * @see app/Http/Controllers/VulnerabilityController.php:31
 * @route '/vulnerabilities/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\VulnerabilityController::create
 * @see app/Http/Controllers/VulnerabilityController.php:31
 * @route '/vulnerabilities/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\VulnerabilityController::create
 * @see app/Http/Controllers/VulnerabilityController.php:31
 * @route '/vulnerabilities/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\VulnerabilityController::create
 * @see app/Http/Controllers/VulnerabilityController.php:31
 * @route '/vulnerabilities/create'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \App\Http\Controllers\VulnerabilityController::store
 * @see app/Http/Controllers/VulnerabilityController.php:42
 * @route '/vulnerabilities'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/vulnerabilities',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\VulnerabilityController::store
 * @see app/Http/Controllers/VulnerabilityController.php:42
 * @route '/vulnerabilities'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\VulnerabilityController::store
 * @see app/Http/Controllers/VulnerabilityController.php:42
 * @route '/vulnerabilities'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\VulnerabilityController::store
 * @see app/Http/Controllers/VulnerabilityController.php:42
 * @route '/vulnerabilities'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\VulnerabilityController::store
 * @see app/Http/Controllers/VulnerabilityController.php:42
 * @route '/vulnerabilities'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\VulnerabilityController::show
 * @see app/Http/Controllers/VulnerabilityController.php:62
 * @route '/vulnerabilities/{vulnerability}'
 */
export const show = (args: { vulnerability: number | { id: number } } | [vulnerability: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/vulnerabilities/{vulnerability}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\VulnerabilityController::show
 * @see app/Http/Controllers/VulnerabilityController.php:62
 * @route '/vulnerabilities/{vulnerability}'
 */
show.url = (args: { vulnerability: number | { id: number } } | [vulnerability: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { vulnerability: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { vulnerability: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    vulnerability: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        vulnerability: typeof args.vulnerability === 'object'
                ? args.vulnerability.id
                : args.vulnerability,
                }

    return show.definition.url
            .replace('{vulnerability}', parsedArgs.vulnerability.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\VulnerabilityController::show
 * @see app/Http/Controllers/VulnerabilityController.php:62
 * @route '/vulnerabilities/{vulnerability}'
 */
show.get = (args: { vulnerability: number | { id: number } } | [vulnerability: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\VulnerabilityController::show
 * @see app/Http/Controllers/VulnerabilityController.php:62
 * @route '/vulnerabilities/{vulnerability}'
 */
show.head = (args: { vulnerability: number | { id: number } } | [vulnerability: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\VulnerabilityController::show
 * @see app/Http/Controllers/VulnerabilityController.php:62
 * @route '/vulnerabilities/{vulnerability}'
 */
    const showForm = (args: { vulnerability: number | { id: number } } | [vulnerability: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\VulnerabilityController::show
 * @see app/Http/Controllers/VulnerabilityController.php:62
 * @route '/vulnerabilities/{vulnerability}'
 */
        showForm.get = (args: { vulnerability: number | { id: number } } | [vulnerability: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\VulnerabilityController::show
 * @see app/Http/Controllers/VulnerabilityController.php:62
 * @route '/vulnerabilities/{vulnerability}'
 */
        showForm.head = (args: { vulnerability: number | { id: number } } | [vulnerability: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \App\Http\Controllers\VulnerabilityController::edit
 * @see app/Http/Controllers/VulnerabilityController.php:74
 * @route '/vulnerabilities/{vulnerability}/edit'
 */
export const edit = (args: { vulnerability: number | { id: number } } | [vulnerability: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/vulnerabilities/{vulnerability}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\VulnerabilityController::edit
 * @see app/Http/Controllers/VulnerabilityController.php:74
 * @route '/vulnerabilities/{vulnerability}/edit'
 */
edit.url = (args: { vulnerability: number | { id: number } } | [vulnerability: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { vulnerability: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { vulnerability: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    vulnerability: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        vulnerability: typeof args.vulnerability === 'object'
                ? args.vulnerability.id
                : args.vulnerability,
                }

    return edit.definition.url
            .replace('{vulnerability}', parsedArgs.vulnerability.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\VulnerabilityController::edit
 * @see app/Http/Controllers/VulnerabilityController.php:74
 * @route '/vulnerabilities/{vulnerability}/edit'
 */
edit.get = (args: { vulnerability: number | { id: number } } | [vulnerability: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\VulnerabilityController::edit
 * @see app/Http/Controllers/VulnerabilityController.php:74
 * @route '/vulnerabilities/{vulnerability}/edit'
 */
edit.head = (args: { vulnerability: number | { id: number } } | [vulnerability: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\VulnerabilityController::edit
 * @see app/Http/Controllers/VulnerabilityController.php:74
 * @route '/vulnerabilities/{vulnerability}/edit'
 */
    const editForm = (args: { vulnerability: number | { id: number } } | [vulnerability: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\VulnerabilityController::edit
 * @see app/Http/Controllers/VulnerabilityController.php:74
 * @route '/vulnerabilities/{vulnerability}/edit'
 */
        editForm.get = (args: { vulnerability: number | { id: number } } | [vulnerability: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\VulnerabilityController::edit
 * @see app/Http/Controllers/VulnerabilityController.php:74
 * @route '/vulnerabilities/{vulnerability}/edit'
 */
        editForm.head = (args: { vulnerability: number | { id: number } } | [vulnerability: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \App\Http\Controllers\VulnerabilityController::update
 * @see app/Http/Controllers/VulnerabilityController.php:86
 * @route '/vulnerabilities/{vulnerability}'
 */
export const update = (args: { vulnerability: number | { id: number } } | [vulnerability: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/vulnerabilities/{vulnerability}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\VulnerabilityController::update
 * @see app/Http/Controllers/VulnerabilityController.php:86
 * @route '/vulnerabilities/{vulnerability}'
 */
update.url = (args: { vulnerability: number | { id: number } } | [vulnerability: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { vulnerability: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { vulnerability: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    vulnerability: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        vulnerability: typeof args.vulnerability === 'object'
                ? args.vulnerability.id
                : args.vulnerability,
                }

    return update.definition.url
            .replace('{vulnerability}', parsedArgs.vulnerability.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\VulnerabilityController::update
 * @see app/Http/Controllers/VulnerabilityController.php:86
 * @route '/vulnerabilities/{vulnerability}'
 */
update.put = (args: { vulnerability: number | { id: number } } | [vulnerability: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\VulnerabilityController::update
 * @see app/Http/Controllers/VulnerabilityController.php:86
 * @route '/vulnerabilities/{vulnerability}'
 */
update.patch = (args: { vulnerability: number | { id: number } } | [vulnerability: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\VulnerabilityController::update
 * @see app/Http/Controllers/VulnerabilityController.php:86
 * @route '/vulnerabilities/{vulnerability}'
 */
    const updateForm = (args: { vulnerability: number | { id: number } } | [vulnerability: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\VulnerabilityController::update
 * @see app/Http/Controllers/VulnerabilityController.php:86
 * @route '/vulnerabilities/{vulnerability}'
 */
        updateForm.put = (args: { vulnerability: number | { id: number } } | [vulnerability: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\VulnerabilityController::update
 * @see app/Http/Controllers/VulnerabilityController.php:86
 * @route '/vulnerabilities/{vulnerability}'
 */
        updateForm.patch = (args: { vulnerability: number | { id: number } } | [vulnerability: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\VulnerabilityController::destroy
 * @see app/Http/Controllers/VulnerabilityController.php:108
 * @route '/vulnerabilities/{vulnerability}'
 */
export const destroy = (args: { vulnerability: number | { id: number } } | [vulnerability: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/vulnerabilities/{vulnerability}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\VulnerabilityController::destroy
 * @see app/Http/Controllers/VulnerabilityController.php:108
 * @route '/vulnerabilities/{vulnerability}'
 */
destroy.url = (args: { vulnerability: number | { id: number } } | [vulnerability: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { vulnerability: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { vulnerability: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    vulnerability: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        vulnerability: typeof args.vulnerability === 'object'
                ? args.vulnerability.id
                : args.vulnerability,
                }

    return destroy.definition.url
            .replace('{vulnerability}', parsedArgs.vulnerability.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\VulnerabilityController::destroy
 * @see app/Http/Controllers/VulnerabilityController.php:108
 * @route '/vulnerabilities/{vulnerability}'
 */
destroy.delete = (args: { vulnerability: number | { id: number } } | [vulnerability: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\VulnerabilityController::destroy
 * @see app/Http/Controllers/VulnerabilityController.php:108
 * @route '/vulnerabilities/{vulnerability}'
 */
    const destroyForm = (args: { vulnerability: number | { id: number } } | [vulnerability: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\VulnerabilityController::destroy
 * @see app/Http/Controllers/VulnerabilityController.php:108
 * @route '/vulnerabilities/{vulnerability}'
 */
        destroyForm.delete = (args: { vulnerability: number | { id: number } } | [vulnerability: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const vulnerabilities = {
    fetchNvd: Object.assign(fetchNvd, fetchNvd),
index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default vulnerabilities