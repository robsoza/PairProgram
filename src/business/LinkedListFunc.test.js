import func from './LinkedListFunc';

test('test plumming', () => {
    expect(func.test1()).toBe('hi')
})

//create list
let list = new func.LinkedList();
list.insert('a', 1);
expect(list.total()).toBe(1);
expect(list.first()).toBe('a');
expect(list.show()).toBe('subject: a, amount: 1');
expect(list.next()).toBe('a');
expect(list.last()).toBe('a');
expect(list.previous()).toBe('a');
list.delete();
expect(list.first()).toBe(null);
expect(list.delete()).toBe('list is empty');
expect(list.total()).toBe(0);

list.insert('a', 1);
list.insert('b', 2);
expect(list.show()).toBe('subject: b, amount: 2');
expect(list.first()).toBe('a');
expect(list.next()).toBe('b');
expect(list.last()).toBe('b');
expect(list.previous()).toBe('a');

list.delete();
expect(list.show()).toBe('subject: b, amount: 2');

list.insert('c', 3);
expect(list.show()).toBe('subject: c, amount: 3');
expect(list.total()).toBe(5);
list.delete();
expect(list.show()).toBe('subject: b, amount: 2');