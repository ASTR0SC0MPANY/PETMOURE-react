import React from "react"
import './ProductDetails.css'

class ProductDetails extends React.Component{

    state = {
        products: [
            {
                "_id": "1",
                "title": "Nike Shoes",
                "src": [
                    "Cachorro/Acessórios/A1.png",
                    "Cachorro/Acessórios/A2.png",
                    "Cachorro/Acessórios/A3.png",
                    "Cachorro/Acessórios/A4.png"
                  ],
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 23,
                "colors":["red","black","crimson","teal"],
                "count": 1
                }
        ],
        index: 0
    };

    myRef = React.createRef();

    handleTab = index =>{
        this.setState({index: index})
        const images = this.myRef.current.children;
        for(let i=0; i<images.length; i++){
            images[i].className = images[i].className.replace("active", "");
        }
        images[index].className = "active";
    };

    componentDidMount(){
        const {index} = this.state;
        this.myRef.current.children[index].className = "active";
        
    }
    render(){
        const {products, index} = this.state;
      
        return(
            <div className="app">
                {
                    products.map(item =>(
                        <div className="details" key={item._id}>
                            <div className="big-img">
                                <img src={item.src[index]} alt=""/>
                            </div>

                            <div className="box">
                                <div className="row">
                                    <h2>{item.title}</h2>
                                    <span>${item.price}</span>
                                </div>

                                <div className="colors">
                                    {
                                        item.colors.map((color, index) =>(
                                            <button style={{background: color}} key={index}></button>
                                        ))
                                    }
                                </div>

                                <p>{item.description}</p>
                                <p>{item.content}</p>

                                <div className="thumb" ref={this.myRef}>
                                    {
                                        item.src.map((img, index) =>(
                                            <img src={img} alt="" key={index}
                                            onClick={() => this.handleTab(index)}/>
                                        ))
                                    }
                                </div>

                                <button className="cart">Add to cart</button>

                            </div>
                        </div>
                    ))
                }
            </div>
        );
    };
}

export default ProductDetails;