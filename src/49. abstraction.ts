// Interface:
// If a method is not having body: abstract method
// Interface is just a prototype: no business logic
// Cannot create an object of interface (new RBI())
// 100% abstraction

class BankPolicy {
    aprPolicy(): void {
        console.log('APR Policy');
    }
}


interface WorldBank {
    remit(): void;
}

interface RBI {
    fee: number;
    credit(): void;
    debit(): void;
    transfer(): void;
}

class HDFC extends BankPolicy implements RBI, WorldBank {
    fee: number = 100;
    override aprPolicy(): void {
        console.log('HDFC APR Policy');
    }
    remit(): void {
        console.log('hdfc - remit');
    }
    credit(): void {
        console.log('hdfc - credit');
    }
    debit(): void {
        console.log('hdfc - debit');
    }
    transfer(): void {
        console.log('hdfc - transfer');
    }
    homeLoan(): void {
        console.log('hdfc - homeLoan');
    }
}


let hdfc: HDFC = new HDFC();
hdfc.credit(); //hdfc - credit
hdfc.debit(); //hdfc - debit
hdfc.transfer(); //hdfc - transfer
hdfc.homeLoan(); //hdfc - homeLoan


// Top Casting:
// Child class object can be referred by parent class reference variable
let rbi: RBI = new HDFC();
rbi.credit();


// Down Casting: Not Applicable



interface WorldBank {
    remit(): void;
}

interface BankInterface extends WorldBank {
    credit(): void;
    debit(): void;
    transfer(): void;
}

class HDFCBank implements BankInterface {
    credit(): void {
        throw new Error("Method not implemented.");
    }
    debit(): void {
        throw new Error("Method not implemented.");
    }
    transfer(): void {
        throw new Error("Method not implemented.");
    }
    remit(): void {
        throw new Error("Method not implemented.");
    }
}



// Child - Parent
// C-C : extends
// C-I : implements
// I-I : extends
// I-C : NA



//----------------------------------------------------------------




// Abstract Class:
// 50% Abstraction, 50% Normal Methods
// We cannot create an object of Abstract class

abstract class Page {
    abstract title(): void;
    abstract url(): void;
    logo: boolean = true;

    loading(): void {
        console.log('loading in 10 sec ------');
    }
    header(): void {
        console.log('header');
    }
}

class LoginPage extends Page {
    title(): void {
        console.log('title');
    }
    url(): void {
        console.log('url');
    }
    override loading(): void {
        console.log('loading in 2 sec');
    }
    doLogin(): void {
        console.log('Logging in');
    }
}


let lp: LoginPage = new LoginPage();
lp.title(); //title
lp.url(); //url
lp.loading(); //loading in 2 sec
lp.doLogin(); //Logging in
lp.header(); //header





// Disadvantage of Abstract Class - 
// We cannot do multi inheritance, interface can do multi inheritance
