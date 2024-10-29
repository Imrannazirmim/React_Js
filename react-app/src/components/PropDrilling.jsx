
//props drilling not use for react application

export const ParentComponent = () => {
    return(
        <section>
            <h1>Component A</h1>
            <ChildComponent data="React js"/>
        </section>
    )
}

const ChildComponent = (props) => {
    return(
        <>
        <h1>Component B</h1>
        <GrandChildCompnent data={props.data}/>
        
        </>
    )
}

const GrandChildCompnent = (props) => {
    return(
        <>
            <h1>Component C</h1>
            <GrandChildComponentNext data={props.data}/>
        
        </>
    )
}

const GrandChildComponentNext = (props) => {
    return(
        <>
        <h1>i love bangladesh {props.data}</h1>
        
        
        </>
    )
}

