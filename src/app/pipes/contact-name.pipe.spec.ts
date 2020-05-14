import {Contact} from '../models/contact';
import {ContactNamePipe} from './contact-name.pipe';

describe('Pipe: ContactName', () => {
  let pipe;

  beforeEach(() => {
    pipe = new ContactNamePipe();
  });

  it('should concatenate a contact name', () => {
    const contact = {firstName: 'Bert', surname: 'Brood', email: 'bertbrood@lekker.nl'};

    const result = pipe.transform(contact);

    expect(result).toEqual('Bert Brood');
  });

  it('should return contact is null if contact is null', () => {
    const contact = null;

    const result = pipe.transform(contact);

    expect(result).toEqual('Contact info in missing');
  });

});
