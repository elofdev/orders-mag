import { builder } from "../builder";

builder.prismaObject(
    'Category', {
  fields: (t) => ({
    id: t.exposeID('id'),
    name: t.exposeString('name'),
    tax: t.exposeFloat('tax',{}),
    createdAt: t.exposeDate('createdAt',{}),
    updatedAt: t.expose('updatedAt,{}),
  })
})
