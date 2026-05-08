import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\ThreatController::index
 * @see app/Http/Controllers/ThreatController.php:16
 * @route '/threats'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/threats',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ThreatController::index
 * @see app/Http/Controllers/ThreatController.php:16
 * @route '/threats'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ThreatController::index
 * @see app/Http/Controllers/ThreatController.php:16
 * @route '/threats'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ThreatController::index
 * @see app/Http/Controllers/ThreatController.php:16
 * @route '/threats'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ThreatController::index
 * @see app/Http/Controllers/ThreatController.php:16
 * @route '/threats'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ThreatController::index
 * @see app/Http/Controllers/ThreatController.php:16
 * @route '/threats'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ThreatController::index
 * @see app/Http/Controllers/ThreatController.php:16
 * @route '/threats'
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
* @see \App\Http\Controllers\ThreatController::create
 * @see app/Http/Controllers/ThreatController.php:28
 * @route '/threats/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/threats/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ThreatController::create
 * @see app/Http/Controllers/ThreatController.php:28
 * @route '/threats/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ThreatController::create
 * @see app/Http/Controllers/ThreatController.php:28
 * @route '/threats/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ThreatController::create
 * @see app/Http/Controllers/ThreatController.php:28
 * @route '/threats/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ThreatController::create
 * @see app/Http/Controllers/ThreatController.php:28
 * @route '/threats/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ThreatController::create
 * @see app/Http/Controllers/ThreatController.php:28
 * @route '/threats/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ThreatController::create
 * @see app/Http/Controllers/ThreatController.php:28
 * @route '/threats/create'
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
* @see \App\Http\Controllers\ThreatController::store
 * @see app/Http/Controllers/ThreatController.php:36
 * @route '/threats'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/threats',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ThreatController::store
 * @see app/Http/Controllers/ThreatController.php:36
 * @route '/threats'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ThreatController::store
 * @see app/Http/Controllers/ThreatController.php:36
 * @route '/threats'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ThreatController::store
 * @see app/Http/Controllers/ThreatController.php:36
 * @route '/threats'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ThreatController::store
 * @see app/Http/Controllers/ThreatController.php:36
 * @route '/threats'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\ThreatController::show
 * @see app/Http/Controllers/ThreatController.php:46
 * @route '/threats/{threat}'
 */
export const show = (args: { threat: number | { id: number } } | [threat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/threats/{threat}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ThreatController::show
 * @see app/Http/Controllers/ThreatController.php:46
 * @route '/threats/{threat}'
 */
show.url = (args: { threat: number | { id: number } } | [threat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { threat: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { threat: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    threat: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        threat: typeof args.threat === 'object'
                ? args.threat.id
                : args.threat,
                }

    return show.definition.url
            .replace('{threat}', parsedArgs.threat.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ThreatController::show
 * @see app/Http/Controllers/ThreatController.php:46
 * @route '/threats/{threat}'
 */
show.get = (args: { threat: number | { id: number } } | [threat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ThreatController::show
 * @see app/Http/Controllers/ThreatController.php:46
 * @route '/threats/{threat}'
 */
show.head = (args: { threat: number | { id: number } } | [threat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ThreatController::show
 * @see app/Http/Controllers/ThreatController.php:46
 * @route '/threats/{threat}'
 */
    const showForm = (args: { threat: number | { id: number } } | [threat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ThreatController::show
 * @see app/Http/Controllers/ThreatController.php:46
 * @route '/threats/{threat}'
 */
        showForm.get = (args: { threat: number | { id: number } } | [threat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ThreatController::show
 * @see app/Http/Controllers/ThreatController.php:46
 * @route '/threats/{threat}'
 */
        showForm.head = (args: { threat: number | { id: number } } | [threat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\ThreatController::edit
 * @see app/Http/Controllers/ThreatController.php:58
 * @route '/threats/{threat}/edit'
 */
export const edit = (args: { threat: number | { id: number } } | [threat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/threats/{threat}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ThreatController::edit
 * @see app/Http/Controllers/ThreatController.php:58
 * @route '/threats/{threat}/edit'
 */
edit.url = (args: { threat: number | { id: number } } | [threat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { threat: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { threat: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    threat: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        threat: typeof args.threat === 'object'
                ? args.threat.id
                : args.threat,
                }

    return edit.definition.url
            .replace('{threat}', parsedArgs.threat.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ThreatController::edit
 * @see app/Http/Controllers/ThreatController.php:58
 * @route '/threats/{threat}/edit'
 */
edit.get = (args: { threat: number | { id: number } } | [threat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ThreatController::edit
 * @see app/Http/Controllers/ThreatController.php:58
 * @route '/threats/{threat}/edit'
 */
edit.head = (args: { threat: number | { id: number } } | [threat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ThreatController::edit
 * @see app/Http/Controllers/ThreatController.php:58
 * @route '/threats/{threat}/edit'
 */
    const editForm = (args: { threat: number | { id: number } } | [threat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ThreatController::edit
 * @see app/Http/Controllers/ThreatController.php:58
 * @route '/threats/{threat}/edit'
 */
        editForm.get = (args: { threat: number | { id: number } } | [threat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ThreatController::edit
 * @see app/Http/Controllers/ThreatController.php:58
 * @route '/threats/{threat}/edit'
 */
        editForm.head = (args: { threat: number | { id: number } } | [threat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\ThreatController::update
 * @see app/Http/Controllers/ThreatController.php:68
 * @route '/threats/{threat}'
 */
export const update = (args: { threat: number | { id: number } } | [threat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/threats/{threat}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\ThreatController::update
 * @see app/Http/Controllers/ThreatController.php:68
 * @route '/threats/{threat}'
 */
update.url = (args: { threat: number | { id: number } } | [threat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { threat: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { threat: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    threat: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        threat: typeof args.threat === 'object'
                ? args.threat.id
                : args.threat,
                }

    return update.definition.url
            .replace('{threat}', parsedArgs.threat.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ThreatController::update
 * @see app/Http/Controllers/ThreatController.php:68
 * @route '/threats/{threat}'
 */
update.put = (args: { threat: number | { id: number } } | [threat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\ThreatController::update
 * @see app/Http/Controllers/ThreatController.php:68
 * @route '/threats/{threat}'
 */
update.patch = (args: { threat: number | { id: number } } | [threat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\ThreatController::update
 * @see app/Http/Controllers/ThreatController.php:68
 * @route '/threats/{threat}'
 */
    const updateForm = (args: { threat: number | { id: number } } | [threat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ThreatController::update
 * @see app/Http/Controllers/ThreatController.php:68
 * @route '/threats/{threat}'
 */
        updateForm.put = (args: { threat: number | { id: number } } | [threat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\ThreatController::update
 * @see app/Http/Controllers/ThreatController.php:68
 * @route '/threats/{threat}'
 */
        updateForm.patch = (args: { threat: number | { id: number } } | [threat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\ThreatController::destroy
 * @see app/Http/Controllers/ThreatController.php:78
 * @route '/threats/{threat}'
 */
export const destroy = (args: { threat: number | { id: number } } | [threat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/threats/{threat}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ThreatController::destroy
 * @see app/Http/Controllers/ThreatController.php:78
 * @route '/threats/{threat}'
 */
destroy.url = (args: { threat: number | { id: number } } | [threat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { threat: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { threat: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    threat: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        threat: typeof args.threat === 'object'
                ? args.threat.id
                : args.threat,
                }

    return destroy.definition.url
            .replace('{threat}', parsedArgs.threat.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ThreatController::destroy
 * @see app/Http/Controllers/ThreatController.php:78
 * @route '/threats/{threat}'
 */
destroy.delete = (args: { threat: number | { id: number } } | [threat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\ThreatController::destroy
 * @see app/Http/Controllers/ThreatController.php:78
 * @route '/threats/{threat}'
 */
    const destroyForm = (args: { threat: number | { id: number } } | [threat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ThreatController::destroy
 * @see app/Http/Controllers/ThreatController.php:78
 * @route '/threats/{threat}'
 */
        destroyForm.delete = (args: { threat: number | { id: number } } | [threat: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const threats = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default threats