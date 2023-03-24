

const Ship = (length, hitCounter, sunk) =>{

    const hit = (ship) => {
        ship.hitCounter++;
        return ship.hitCounter;
    };

    const isSunk = (ship) => {
        if (ship.length === ship.hitCounter){
            ship.sunk = 'Yes'
        } else {
            ship.sunk = 'No'
        };

    };

    return {length, hitCounter, sunk, hit, isSunk};

};

const Gameboard = () => {



};



