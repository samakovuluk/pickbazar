import { Resolver, Query, Arg, ID, Mutation } from 'type-graphql';
import Stuff from './stuff.type';
import loadStuffs from '../../data/stuff.data';
import AddStuffInput from './stuff.input_type';
import search from '../../helpers/search';
@Resolver()
export default class StuffResolver {
  private readonly stuffsCollection: Stuff[] = loadStuffs();

  @Query(() => [Stuff])
  async stuffs(
    @Arg('role', { nullable: true }) role?: string,
    @Arg('searchBy', { nullable: true }) searchBy?: string
  ): Promise<Stuff[] | undefined> {
    // as auth Stuff. check from middleware.
    let stuffs = this.stuffsCollection;
    if (role) {
      stuffs = stuffs.filter(
        stuff => stuff.role.toLowerCase() === role.toLowerCase()
      );
    }
    return await search(stuffs, ['name'], searchBy);
  }
  @Query(() => Stuff)
  async stuff(@Arg('id', type => ID) id: string): Promise<Stuff | undefined> {
    // as auth Stuff. check from middleware.
    console.log(id, 'stuff_id');
    return await this.stuffsCollection.find(stuff => stuff.id === id);
  }

  @Mutation(() => Stuff, { description: 'Create Stuff' })
  async createStuff(@Arg('stuff') stuff: AddStuffInput): Promise<Stuff> {
    console.log(stuff, 'Stuff');
    return await stuff;
  }

  //   @Mutation(() => Stuff, { description: 'Add or Edit Address' })
  //   async updateAddress(
  //     @Arg('addressInput') addressInput: string
  //   ): Promise<Stuff> {
  //     console.log(addressInput, 'addressinput');
  //     return await this.stuffsCollection[0];
  //   }

  //   @Mutation(() => Stuff, { description: 'Add or Edit Contact' })
  //   async updateContact(
  //     @Arg('contactInput') contactInput: string
  //   ): Promise<Stuff> {
  //     console.log(contactInput, 'contactinput');
  //     return await this.stuffsCollection[0];
  //   }

  //   @Mutation(() => Stuff, { description: 'Delete Address' })
  //   async deleteAddress(@Arg('addressId') addressId: string): Promise<Stuff> {
  //     console.log(addressId, 'address_id');
  //     return await this.stuffsCollection[0];
  //   }

  //   @Mutation(() => Stuff, { description: 'Delete Contact' })
  //   async deleteContact(@Arg('contactId') contactId: string): Promise<Stuff> {
  //     console.log(contactId, 'contact_id');
  //     return await this.stuffsCollection[0];
  //   }

  //   @Mutation(() => Stuff, { description: 'Add Payment Card' })
  //   async addPaymentCard(@Arg('cardInput') cardInput: string): Promise<Stuff> {
  //     console.log(cardInput, 'cardInput');
  //     return await this.stuffsCollection[0];
  //   }

  //   @Mutation(() => Stuff, { description: 'Delete Payment Card' })
  //   async deletePaymentCard(@Arg('cardId') cardId: string): Promise<Stuff> {
  //     console.log(cardId, 'card_id');
  //     return await this.stuffsCollection[0];
  //   }
}
