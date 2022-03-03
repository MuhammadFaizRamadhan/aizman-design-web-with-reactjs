import React from 'react'; 

export default class Media extends React.Component {
    render(){
        return(
            <div>
                <img alt='' className={this.props.className} src={process.env.PUBLIC_URL+'/assets/'+this.props.image}
                 />
                 <img alt='' className={this.props.className} src={process.env.PUBLIC_URL+'/assets/home/'+this.props.image}
                 />
                 <img alt='' className={this.props.className} src={process.env.PUBLIC_URL+'/assets/navbar/'+this.props.image}
                 />
                 <img alt='' className={this.props.className} src={process.env.PUBLIC_URL+'/assets/testimoni/'+this.props.image}
                 />
                 <img alt='' className={this.props.className} src={process.env.PUBLIC_URL+'/assets/footer/'+this.props.image}
                 />
                 <img alt='' className={this.props.className} src={process.env.PUBLIC_URL+'/assets/portfolio/'+this.props.image}
                 />
            </div>
            // <div>
                
            
            //     <div className='col col-auto text-left'>
            //         <h4 className='mt-0'>{this.props.title}</h4>
            //         <p>{this.props.children}</p>
            //     </div>
            // </div>
        )
    }
}