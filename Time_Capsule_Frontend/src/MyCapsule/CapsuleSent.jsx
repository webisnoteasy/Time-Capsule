const CapsuleSent = ({ testCapsule }) => {
    const SentCapsule = testCapsule.filter((a)=>a.status === 'sent')
    return (
        <div>
            {SentCapsule.map((a,i) => {
                return (
                    <div key={i}> 
                        <h1> {a.title} | {a.openAt} | {a.status} </h1>
                    </div>
                );
            })}
        </div>
    );
};

export default CapsuleSent;