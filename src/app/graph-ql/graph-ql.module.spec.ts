import { GraphQLModule } from './graph-ql.module';

describe('GraphQLModule', () => {
  let graphQLModule: GraphQLModule;

  beforeEach(() => {
    graphQLModule = new GraphQLModule();
  });

  it('should create an instance', () => {
    expect(graphQLModule).toBeTruthy();
  });
});
