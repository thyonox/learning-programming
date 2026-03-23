// 泛型函数
function print<T>(arg: T): T {
    return arg;
}

console.log(`${print("Hello, World!")}`);
console.log(`${print(123)}`);

// 泛型接口
interface Box<T> {
    value: T;
    getValue(): T; 
}

class StringBox implements Box<string> {
    value = "Hello, World!";
    getValue(): string {
        return this.value;
    }
    
}

const numberBox: Box<number> = {
    value : 123,
    getValue() {
        return this.value;
    },
}

// 泛型类
class GenericRepository<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    getByIndex(index: number): T | undefined {
        return this.items[index];
    }
}

const userRepo = new GenericRepository<{ name: string; age: number}>();
userRepo.add({name: "Alice", age: 30});
userRepo.add({name: "James", age: 35});

console.log(`${JSON.stringify(userRepo.getByIndex(0))}`);
console.log(`${JSON.stringify(userRepo.getByIndex(2))}`);

