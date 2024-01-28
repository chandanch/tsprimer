/**
 * Decorators are functions that are applied to classes, methods, properties, or parameters
 * In TypeScript, decorators are a way to modify or annotate classes, methods, properties, or parameters at design time
 *
 */

function ClasserDeco(fn: Function) {
    console.log(`Executing decorator`);
}

@ClasserDeco
class Decoerme {}
