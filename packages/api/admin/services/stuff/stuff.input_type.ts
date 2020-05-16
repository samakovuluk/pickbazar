import { InputType, Field, ID } from 'type-graphql';
import Stuff from './stuff.type';
@InputType({ description: 'New stuff data' })
export default class AddStuffInput implements Partial<Stuff> {
  @Field(type => ID)
  id: string;

  @Field()
  first_name: string;

  @Field()
  last_name: string;

  @Field()
  contact_number: string;

  @Field()
  email: string;

  @Field()
  role: string;

  @Field({ nullable: true })
  name: string;

  @Field()
  creation_date: Date;
}
