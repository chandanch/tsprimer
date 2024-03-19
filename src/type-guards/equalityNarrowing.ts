/**
 * Equality Narrowing is a type of narrowing technique that helps TS to infer
 * a more specific type based on the equality operators
 */

type HilCircle = {
    kind: 'circle';
    radius: number;
};

type HilSquare = {
    kind: 'square';
    length: number;
};

type HilShape = HilCircle | HilSquare;

const calculateArea = (shape: HilShape) => {
    if (shape.kind === 'circle') {
        return shape.radius * 3.14;
    } else {
        return shape.length ** 2;
    }
};

const JiHilSquare: HilCircle = {
    kind: 'circle',
    radius: 34,
};

calculateArea(JiHilSquare);
