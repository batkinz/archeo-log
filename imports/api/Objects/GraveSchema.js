/**
 * Created by bence on 2017.04.25..
 */
import SimpleSchema from 'simpl-schema';
import StaticFormOptionProvider from '../StaticFormOptions/StaticFormOptionProvider.js';

const SkeletonSchema = new SimpleSchema({
    csontvaz: {
        label: 'Csontváz',
        type: Array,
        optional: true,
        omitInForm: true,
        // custom() {
        //     if (this.isSet && this.value.length !== this.field('sir.azonosithato_csontvazak_szama').value) {
        //         return 'notAllowed';
        //     }
        //     return undefined;
        // },
    },
    'csontvaz.$': {
        type: Object,
    },
    'csontvaz.$.jobb_felkar_hossz': {
        type: Number,
        optional: true,
    },
    'csontvaz.$.bal_felkar_hossz': {
        type: Number,
        optional: true,
    },
    'csontvaz.$.jobb_alkar_hossz': {
        type: Number,
        optional: true,
    },
    'csontvaz.$.bal_alkar_hossz': {
        type: Number,
        optional: true,
    },
    'csontvaz.$.jobb_combcsont_hossz': {
        type: Number,
        optional: true,
    },
    'csontvaz.$.bal_combcsont_hossz': {
        type: Number,
        optional: true,
    },
    'csontvaz.$.jobb_sipcsont_hossz': {
        type: Number,
        optional: true,
    },
    'csontvaz.$.bal_sipcsont_hossz': {
        type: Number,
        optional: true,
    },
    'csontvaz.$.teljes_hossz': {
        type: Number,
        optional: true,
    },
    'csontvaz.$.test_elhelyezkedes': {
        type: String,
        optional: true,
        autoform: {
            options() {
                return StaticFormOptionProvider.get('test_elhelyezkedes');
            },
        },
    },
    'csontvaz.$.labak_elhelyezkedes': {
        type: String,
        optional: true,
        autoform: {
            options() {
                return StaticFormOptionProvider.get('labak_elhelyezkedes');
            },
        },
    },
    'csontvaz.$.karok_elhelyezkedes': {
        type: String,
        optional: true,
        autoform: {
            options() {
                return StaticFormOptionProvider.get('karok_elhelyezkedes');
            },
        },
    },
});

const GraveSchema = new SimpleSchema({
    sir: {
        type: Object,
        optional: true,
        omitInForm: true,
    },
    'sir.sirforma': {
        type: String,
        optional: true,
        autoform: {
            options() {
                return StaticFormOptionProvider.get('sirforma');
            },
        },
    },
    'sir.temetkezesi_szokas': {
        type: String,
        optional: true,
        autoform: {
            options() {
                return StaticFormOptionProvider.get('temetkezesi_szokas');
            },
        },
    },
    'sir.temetkezesi_forma': {
        type: String,
        optional: true,
        autoform: {
            options() {
                return StaticFormOptionProvider.get('temetkezesi_forma');
            },
        },
    },
    // 'sir.azonosithato_csontvazak_szama': {
    //     type: Number,
    //     optional: true,
    // },
    'sir.vannak_csontok': {
        type: Boolean,
        defaultValue: false,
    },
    'sir.jobb_felkarok': {
        type: Array,
        optional: true,
        custom() {
            if (!this.siblingField('vannak_csontok').value && this.isSet) {
                return 'notAllowed';
            }
            return undefined;
        },
    },
    'sir.jobb_felkarok.$': {
        type: Number,
    },
    'sir.bal_felkarok': {
        type: Array,
        optional: true,
        custom() {
            if (!this.siblingField('vannak_csontok').value && this.isSet) {
                return 'notAllowed';
            }
            return undefined;
        },
    },
    'sir.bal_felkarok.$': {
        type: Number,
    },
    'sir.jobb_alkarok': {
        type: Array,
        optional: true,
        custom() {
            if (!this.siblingField('vannak_csontok').value && this.isSet) {
                return 'notAllowed';
            }
            return undefined;
        },
    },
    'sir.jobb_alkarok.$': {
        type: Number,
    },
    'sir.bal_alkarok': {
        type: Array,
        optional: true,
        custom() {
            if (!this.siblingField('vannak_csontok').value && this.isSet) {
                return 'notAllowed';
            }
            return undefined;
        },
    },
    'sir.bal_alkarok.$': {
        type: Number,
    },
    'sir.jobb_combcsontok': {
        type: Array,
        optional: true,
        custom() {
            if (!this.siblingField('vannak_csontok').value && this.isSet) {
                return 'notAllowed';
            }
            return undefined;
        },
    },
    'sir.jobb_combcsontok.$': {
        type: Number,
    },
    'sir.bal_combcsontok': {
        type: Array,
        optional: true,
        custom() {
            if (!this.siblingField('vannak_csontok').value && this.isSet) {
                return 'notAllowed';
            }
            return undefined;
        },
    },
    'sir.bal_combcsontok.$': {
        type: Number,
    },
    'sir.jobb_sipcsontok': {
        type: Array,
        optional: true,
        custom() {
            if (!this.siblingField('vannak_csontok').value && this.isSet) {
                return 'notAllowed';
            }
            return undefined;
        },
    },
    'sir.jobb_sipcsontok.$': {
        type: Number,
    },
    'sir.bal_sipcsontok': {
        type: Array,
        optional: true,
        custom() {
            if (!this.siblingField('vannak_csontok').value && this.isSet) {
                return 'notAllowed';
            }
            return undefined;
        },
    },
    'sir.bal_sipcsontok.$': {
        type: Number,
    },
    'sir.reszletes_leiras': {
        type: String,
        optional: true,
        autoform: {
            rows: 6,
        },
    },
    'sir.leirast_keszitette': {
        type: String,
        optional: true,
    },
    'sir.datum': {
        type: Date,
        defaultValue: new Date(),
    },
    'sir.csontvazak': {
        type: Array,
        optional: true,
        autoform: {
            type: 'hidden',
        },
    },
    'sir.csontvazak.$': {
        type: SkeletonSchema.getObjectSchema('csontvaz.$'),
    },
});

GraveSchema.extend(SkeletonSchema);

export default GraveSchema;
