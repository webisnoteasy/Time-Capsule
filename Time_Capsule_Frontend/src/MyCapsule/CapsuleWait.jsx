const CapsuleWait = ({ testCapsule }) => {
    const WaitingCapsule = testCapsule.filter((a)=>a.status === 'waiting')
    return (
        <div>
            {WaitingCapsule.map((a,i) => {
                return (
                    <div key={i}> 
                        <h1> {a.title} | {a.openAt} | {a.status} </h1>
                    </div>
                );
            })}
        </div>
    );
};

export default CapsuleWait;
