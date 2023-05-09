import { useEffect, useState } from 'react';

const Avatars = () => {
    const [count, setCount] = useState(0);
    const [avatar, setAvatar] = useState(3);
    const dataSlug = {
        3: 'micah',
        4: 'bottts',
    }
    useEffect(() => {
        console.log('useEffect Counter ');
    }, [count]);

    useEffect(() => {
        console.log('useEffect Avatars ');
    }, [avatar]);

    const handlerChangeAvatar = () => {
        if (avatar === 4) {
            setAvatar(3);
        } else {
            setAvatar(avatar + 1);
        }
    }

    return (
        <div>
            <div>
                <img src={`https://avatars.dicebear.com/api/${dataSlug[avatar]}/stefan{${count}}.svg`} alt="avatars" width={'300px'} height={200}/>
            </div>
            <br />
            <h2>Avatar {avatar}</h2>
            <button onClick={() => {
                setCount(count + 1);
            }}>Count +</button>
            <button onClick={() => setCount(count - 1)}>Count -</button>
            <button onClick={() => handlerChangeAvatar()}>Avatar +</button>
        </div>
    );
}
export default Avatars;