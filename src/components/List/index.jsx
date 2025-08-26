function List({titulo}) {
    return (
        <section>
            <h2 id="exemplo-get">{titulo}</h2>
            <h3>Lista não ordenada</h3>
            <ul>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
            </ul>
            <h3>Lista ordenada</h3>
            <ol>
                <li>primeiro item</li>
                <li>segundo item</li>
                <li>terceiro item</li>
            </ol>
        </section>
    )
}
export default List