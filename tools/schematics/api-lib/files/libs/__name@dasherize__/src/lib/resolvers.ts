import { ItemsService } from './providers';

export default {
    Query: {
        customItems: async (_, args, { injector }) => injector.get(ItemsService).getItems()
    }
};
