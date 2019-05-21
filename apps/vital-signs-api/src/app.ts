import { GraphQLModule } from '@graphql-modules/core';
import { VitalSignsLibModule } from '@libs/vital-signs-lib';

export const VitalSignsApiModule = new GraphQLModule({
    imports: [VitalSignsLibModule],
    name: 'vitalsignsapi'
});
