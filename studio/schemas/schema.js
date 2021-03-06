// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import person from './person'
import book from './book'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    {
      name: 'settings',
      title: 'Site Settings',
      type: 'document',
      fields: [
        {
          name: 'title',
          title: 'Site Title',
          type: 'string'
        },
        {
          name: 'author',
          title: 'Site Author',
          type: 'string'
        },
        {
          title: 'External Sites',
          name: 'sites',
          type: 'array',
          of: [
            {
              name: 'site',
              title: 'External Site',
              type: 'object',
              fields: [
                {
                  name: 'name',
                  title: 'Site Name',
                  type: 'string'
                },
                {
                  name: 'url',
                  title: 'Site URL',
                  type: 'string'
                }
              ]
            }
            
          ],
        },
        
      ]
    },
    // My first type (model)
    person,
    book,
  ])
})
