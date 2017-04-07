/**
 * Created by bence on 2017.04.06..
 */
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

SimpleSchema.extendOptions({
    editable: Match.Optional(Boolean),
});
