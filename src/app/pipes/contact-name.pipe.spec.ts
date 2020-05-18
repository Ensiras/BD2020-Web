import {Contact} from '../models/contact';
import {ContactNamePipe} from './contact-name.pipe';

describe('Pipe: ContactName', () => {
  let pipe;

  beforeEach(() => {
    pipe = new ContactNamePipe();
  });

  it('should concatenate a contact name', () => {
    const contact = {firstname: 'Bert', surname: 'Brood', email: 'bertbrood@lekker.nl'};

    const result = pipe.transform(contact);

    expect(result).toEqual('Bert Brood');
  });

  it('should return contact is null if contact is null', () => {
    const contact = null;

    const result = pipe.transform(contact);

    expect(result).toEqual('Contact info is missing');
  });
});

describe('typescript intro testjes', () => {
  it('lambda als type notatie', () => {
    // isEven has to contain an anonymous function that accepts one number parameter and returns a boolean
    const isEven: (n: number) => boolean = (n: number) => n % 2 === 0;
    const result = isEven(5);
    expect(result).toBeFalse();
  });

  it('lambda als type notatie experiment', () => {
    // isBert has to contain an anonymous function that accepts one string parameter and returns a boolean
    let isBert: (s: string) => boolean;
    isBert = (s: string) => s === 'Bert';
    const result = isBert('Bert');
    expect(result).toBeTrue();
  });

  it('class fields in constructor', () => {
    class Person {
      // adding access modifier to constructor parameter creates a corresponding field in class
      constructor(public name: string, private age: number) { }
    }
    const person = new Person('Bert', 34); // parameter is automatically assigned to 'name' field
    expect(person.name).toEqual('Bert');
    // expect(person.age).toEqual('34'); field is private
  });

  it('interface experiment', () => {
    interface Named { // interfaces do not describe behaviour, but structure
      name: string;
    }

    class Person implements Named {
      name: string;
      constructor(name: string) {
        this.name = name;
      }
    }
  });
  it('structural subtyping', () => {
    interface Named { // interfaces do not describe behaviour, but structure
      name: string;
    }

    class Person {
      constructor(public name: string) {
      }
    }
    // Possible to store a Person in a Named variable even though Person doesn't implement Named interface explicitly
    const person: Named = new Person('Bert');
    expect(person).toBeInstanceOf(Person);

  });
});
