/** We can also pass custom type as a param to the function. This provides greater flexibility
 * & scalability when defining function and its types
 */

// creating a custom type
type CreatePlayer = {
    name: string;
    age: number;
    ssn: number;
};

type NewPlayer = {
    id: number;
    name: string;
    age: number;
    ssn: number;
};

// specifying custom type as a param and returning a custom type
function createNewPlayer(player: CreatePlayer): NewPlayer {
    return {
        ...player,
        id: 222,
    };
}
