

const shipFactory = (length, hitCounter, sunk) =>{

    const hit = (ship) => {
        ship.hitCounter++;
        return ship.hitCounter;
    };

    const isSunk = () => {
        if (length === hitCounter){
            sunk = console.log('Yes');
        } else {
            sunk = 'No'
        };

    };

    return {length, hitCounter, sunk, hit, isSunk};

};

const carrier = shipFactory(5, 0, 'no');
carrier.hit(carrier);
console.log(carrier.hitCounter);

