const CapsuleAll = ({ testCapsule }) => {
    return (
        <div>
            {testCapsule.map((a,i) => {
                return (
                    <div key={i}> 
                        <h1> {a.title} | {a.openAt} | {a.status} </h1>
                    </div>
                );
            })}
        </div>
    );
};

export default CapsuleAll;
