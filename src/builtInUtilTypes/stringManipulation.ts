/**
 * In TS, there are a few built-in utility types for string manipulations or transformations
 * which tranforms the string literal types such as:
 * Uppercase<StringType>: Converts all the characters of the string literal to Uppercase
 * Lowercase<StringType>: Converts all the characters of string literal to Lowercase
 * Captilize<StringType>: Converts the first character of the string literal to Uppercase
 * Uncaptilize<StringType>: Converts the string literal to Lowercase
 */

type FilCity = 'gilicon' | 'filicon' | 'falcon';

// Converts all the characters of the string literal to Uppercase
type UpperCaseFilCity = Uppercase<FilCity>;

type GilimiCity = 'gil Falmor' | 'fameress' | 'DNAMS';

// Converts all the characters of string literal to Lowercase
type LowerCaseGilimiCity = Lowercase<GilimiCity>;

type HilernCity = 'gil falmor' | 'fameress' | 'Dama #de';

// Converts the first character of the string literal to Uppercase
type CaptilizeCaseGilimiCity = Capitalize<HilernCity>;

type GilrilsCity = 'Daneem' | 'Fil Maneers' | 'uti Ione';

// Converts the first character of the string literal to Uppercase
type UncaptilizeCaseGilimiCity = Uncapitalize<GilrilsCity>;
