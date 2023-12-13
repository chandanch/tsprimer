/**
 * Static Members: Static members are the members of the class which can be accessed
 * directly without creating an instance of class
 * Static members must be prefixed with static keyword
 * Static members can be accessed using the classname: <classname>.<member_name>
 */

class ColorGenerator {
    // creating a static member
    public static pattern: string;

    getColorPattern() {
        // accessing the static member within the class
        // can only nbe accessed with Classname.membername i.e. ColorGenerator.pattern
        return ColorGenerator.pattern;
    }
}
