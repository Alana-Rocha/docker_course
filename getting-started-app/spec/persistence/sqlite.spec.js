import { init, storeItem, getItems, updateItem, removeItem, getItem } from '../../src/persistence/sqlite';
import { existsSync, unlinkSync } from 'fs';
const location = process.env.SQLITE_DB_LOCATION || '/etc/todos/todo.db';

const ITEM = {
    id: '7aef3d7c-d301-4846-8358-2a91ec9d6be3',
    name: 'Test',
    completed: false,
};

beforeEach(() => {
    if (existsSync(location)) {
        unlinkSync(location);
    }
});

test('it initializes correctly', async () => {
    await init();
});

test('it can store and retrieve items', async () => {
    await init();

    await storeItem(ITEM);

    const items = await getItems();
    expect(items.length).toBe(1);
    expect(items[0]).toEqual(ITEM);
});

test('it can update an existing item', async () => {
    await init();

    const initialItems = await getItems();
    expect(initialItems.length).toBe(0);
    
    await storeItem(ITEM);

    await updateItem(
        ITEM.id,
        Object.assign({}, ITEM, { completed: !ITEM.completed }),
    );

    const items = await getItems();
    expect(items.length).toBe(1);
    expect(items[0].completed).toBe(!ITEM.completed);
});

test('it can remove an existing item', async () => {
    await init();
    await storeItem(ITEM);

    await removeItem(ITEM.id);

    const items = await getItems();
    expect(items.length).toBe(0);
});

test('it can get a single item', async () => {
    await init();
    await storeItem(ITEM);

    const item = await getItem(ITEM.id);
    expect(item).toEqual(ITEM);
});
