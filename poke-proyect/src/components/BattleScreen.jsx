
const BattleScreen = ({myPokeSelection, computerRandomSelection,enemyHP,Health}) => {

    console.log({myPokeSelection});
    console.log({computerRandomSelection});

    return <div className="battle-box">
        <div className="enemy-box">
            <h1>{enemyHP}</h1>
            <img id="enemy-box" src={computerRandomSelection[0].sprites.front_default} alt="" />
        </div>
        <div className="my-box">
            <h1>{Health}</h1>
            <img id="my-box" src={myPokeSelection[0].sprites.back_default} alt="" />
        </div>
    </div>
};

export default BattleScreen