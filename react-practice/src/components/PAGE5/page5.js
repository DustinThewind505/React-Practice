import React, { useState } from 'react';


function Page5() {
    // ===== STATE =====
    const [firstAccordian, setFirstAccordian] = useState(false)

    // ===== FUNCTIONS =====


    // ===== COMPONENT =====
    return(
        <div>
            <h1>Page 5</h1>
            <div>
                <p>First Accordian</p>
                <span onClick={() => setFirstAccordian(!firstAccordian)}>+</span>
                {firstAccordian ? <p>Test text</p> : null}
            </div>
        </div>
    )


}

export default Page5;