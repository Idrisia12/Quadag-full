import React from 'react'

const Project = () => {
    return (
        <div>
            <section id="projects">
                <div className="projects container">
                    <div className="projects-header">
                        <h1 className="section-title">A<span>ims</span></h1>
                    </div>
                    <div className="all-projects">
                        <div className="project-item">
                            <div className="project-info">
                                <h1>Project 1</h1>
                                <h2>Reduce Poverty</h2>
                                <p>By eliminating exploitative buying from the value chain, smallholder farmers are able to become financially independent, get enough money to take care of their families and needs thereby alleviating them from poverty</p>
                            </div>
                            <div className="project-img">
                                <img src="/assets/povertyday.gif" alt="img"/>
                            </div>
                        </div>
                    
                    <div className="project-item">
                        <div className="project-info">
                            <h1>Project 2</h1>
                            <h2>Fram Efficiency</h2>
                            <p>Agritech now allows farmers to make maximum use of their farmlands, by growing numerous crops on the same piece of land. It allows for detailed and precise quantities of fertilizers, seeds and even water supply which will ensure maximum yields for the season</p>
                        </div>
                        <div className="project-img">
                            <img src="/assets/equip.jpg" alt="img"/>
                        </div>
                    </div>
                    <div className="project-item">
                        <div className="project-info">
                            <h1>Project 3</h1>
                            <h2>Improve Transportation</h2>
                            <p>Improved transportation will encourage farmers to work harder in the rural areas for increased production, add value to their products, reduce spoilage and wastage</p>
                        </div>
                        <div className="project-img">
                            <img src="/assets/trans.jpg" alt="img"/>
                        </div>
                    </div>
                    <div className="project-item">
                        <div className="project-info">
                            <h1>Project 4</h1>
                            <h2>Storage Facilities</h2>
                            <p>Warehouses help in price stabilization of agricultural commodities by checking the tendency to making post-harvest sales among the farmers. Warehouses also offer the facility of market information to persons who hold their produce in them</p>
                        </div>
                        <div className="project-img">
                            <img src="/assets/Warehouse.jpg" alt="img"/>
                        </div>
                    </div>
                    <div className="project-item">
                        <div className="project-info">
                            <h1>Project 5</h1>
                            <h2>Agricultural Marketing</h2>
                            <p>Agricultural marketing plays an important role not only in stimulating production and consumption, but in accelerating the pace of economic development. The agriculture marketing system plays a dual role in economic development in countries whose resources are primarily agricultural</p>
                        </div>
                        <div className="project-img">
                            <img src="/assets/market.jpg" alt="img"/>
                        </div>
                    </div>
                   </div> 
                </div>
            </section>
        </div>
    )
}

export default Project
