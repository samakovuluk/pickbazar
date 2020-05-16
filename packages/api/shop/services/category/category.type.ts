import { ObjectType, Field, Int } from 'type-graphql';

@ObjectType()
export default class Category {
  @Field(type => Int)
  id: number;

  @Field()
  title: string;

  @Field(type => [Category])
  children: Category[];

  @Field(type => String)
  type: string;

  @Field(type => String)
  icon: string;

  @Field(type => String)
  slug: string;
}
