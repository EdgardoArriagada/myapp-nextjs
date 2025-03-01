/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3765487232")

  // update collection data
  unmarshal({
    "name": "notes"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3765487232")

  // update collection data
  unmarshal({
    "name": "title"
  }, collection)

  return app.save(collection)
})
