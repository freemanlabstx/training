/*
 * Similarly to the User file, we'll define another
 * schema for todos in this file.
 *
 * One interesting aspect here is that todos will be
 * _nested_ underneath users: a user _has_ many todos,
 * and we won't really be creating a Todo model without
 * it being attached to a user. Because of this, we'll
 * just define a todoSchema, and export it to be used inside of
 * the User model.
 *
 * Let's start by importing mongoose, similarly to how we did
 * it in the User model file.
 *
 * Now define todoSchema, which is the value of calling
 * new mongoose.Schema, passing in a single argument, the fields
 * for our schema:
 *
 * - name is a string
 * - notes is a string
 * - created_at is an object, with a type of Date and default of
 *   Date.now
 * - updated_at is an object, with a type of Date and default of
 *   Date.now
 * - completed_at is an object, with a type of Date (and no default)
 *
 * With this schema defined, we're going to skip defining a Todo
 * model itself! Again, the reason for this is that todos will live
 * inside of the User model, and so we care exclusively about using
 * the todoSchema inside of our userSchema.
 *
 * The one caveat here is that in a future design of this application,
 * we may want to use the Todo model directly, for instance, if we
 * need to lookup a Todo independent of a User. We'll examine that later:
 * for now, simply export the todoSchema, using the same syntax that we
 * used for exporting User in the previous file.
 *
 * Once you've done that, go back to models/User to finish the implementation
 * of our models and schemas.
 *
 */
