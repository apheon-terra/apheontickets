export abstract class CustomError extends Error {
    abstract statusCode: number;

    constructor(message: string) {
        super(message);//to fullfill Error definition snd log purpos same as err('message')

        //when extending a build in class
        Object.setPrototypeOf(this, CustomError.prototype);
    }
                                    //all reposnses that we send out from any server should have this structure
    
    abstract serializeErrors(): { message: string; field?: string }[];

}

//abstract means we can use it in 'instanceof' checks, trnaslated in js we end up with a class definition 


 //interfaces do not exist in javascript they fall away when translated

//abstract class allows us to transport the class definition to javascript world

 //error has message name and stack interface Error {
// name: string;
// message: string;
// stack ?: string;
// }


// Are you using typescript version 2.1, and transpiling to ES5 ? Check this section of the breaking changes page for possible issues and workaround: https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work

//     The relevant bit:

// As a recommendation, you can manually adjust the prototype immediately after any super(...) calls.

// class FooError extends Error {
//     constructor(m: string) {
//         super(m);

//         // Set the prototype explicitly.
//         Object.setPrototypeOf(this, FooError.prototype);
//     }

//     sayHello() {
//         return "hello " + this.message;
//     }
// }
// However, any subclass of FooError will have to manually set the prototype as well.For runtimes that don't support Object.setPrototypeOf, you may instead be able to use __proto__.

// Unfortunately, these workarounds will not work on Internet Explorer 10 and prior.One can manually copy methods from the prototype onto the instance itself(i.e.FooError.prototype onto this), but the prototype chain itself cannot be fixed.




// The reason for calling Object.setPrototypeOf is to make sure that any objects created by the Dog constructor will get the Animal object in their prototype chain.It would be wrong to set a prototype of the constructor itself(not to be confused with the constructor's prototype property which really is a misnomer), since the constructor has no place in d's prototype chain.

// A created Dog object does not get Dog in its prototype chain, but Dog.prototype.Dog is just the vehicle by which objects are created, it is not supposed itself to become part of the prototype chain.

// You could instead do this in the Dog constructor:

// Object.setPrototypeOf(this, Animal)
// That makes the length of the prototype chain one step shorter, but the downside is that now d instanceof Dog will no longer be true.It will only be an Animal.This is a pitty, and it explains why it is good to keep the original Dog.prototype object, while setting its prototype to Animal, so that now d is both a Dog and an Animal.