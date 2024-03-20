/**
 * With `in` operator narrowing we can check if the property exists in a type and then perform
 * operations based on it.
 */

type MillCircle = {
    kind: 'circle';
    radius: number;
};

type MillSquare = {
    kind: 'square';
    length: number;
};

type MillShape = MillCircle | MillSquare;

const milCalculateArea = (shape: MillShape) => {
    // use of in operator to check existence of a property
    if ('radius' in shape) {
        return shape.radius * 3.14;
    } else {
        return shape.length ** 2;
    }
};

const JiMillCircle: MillCircle = {
    kind: 'circle',
    radius: 34,
};

milCalculateArea(JiMillCircle);

const JiMillSqaure: MillSquare = {
    kind: 'square',
    length: 3,
};

milCalculateArea(JiMillSqaure);
