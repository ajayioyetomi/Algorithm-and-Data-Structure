class Node{
    constructor(node){
        this.node = node;
        this.next = null;
    }
}

class  LinkList{
    constructor(list){
        this.head = null;
        this.size = 0;
        let current = 0;
        for(let i = 0;i<list.length;i++){
            if(i === 0){
                this.head = new Node(list[i]);
                current = this.head;
                this.size++;
                continue;
            }
            let newNode =  new Node(list[i]);
            current.next = newNode;
            current = newNode;  
            this.size++;     
        }
    }
    size = this.size;

    insertNode = (node,index=this.size) =>{
        if(index > this.size || index < 0) index = this.size;
        let newNode = new Node(node);
        let current = this.head;
        let prev = null;
        let i;
        for(i = 0;i <= this.size;i++){
            if(index == 0){
                newNode.next = this.head;
                this.head = newNode;
                break;
            }
            else{
                if(i === index){
                    prev.next = newNode;
                    newNode.next = current;       
                    break;
                }
            }
            prev = current;
            current = current.next;
        }
        this.size++;
        if(current === null) current = newNode;        
        return this.head;     
    }
    deleteNode = (index = this.size-1) =>{
        if(index > this.size-1) index = this.size-1;
        let current = this.head;
        let prev = null;
        if(index === 0){
            this.head = this.head.next;
        }
        else{
            let i = 0;
            for(i = 0;i<this.size;i++){
                if(i === index){
                    prev.next = current.next;
                }
                prev = current;
                current = current.next;
            }
        }
        this.size--;
        return this.head;
    }
}

let list = new LinkList([1,2,3,4]);

console.log(list.insertNode(7));
console.log(list.size);
console.log(list.deleteNode(2));
console.log(list.size);



