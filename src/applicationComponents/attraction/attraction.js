import React, { Component } from 'react';
import TatvamInput from '../../baseComponents/tatvamInput';
import './attraction.scss';

class Attraction extends Component {
    constructor(props) {
        super(props);
    }

    async componentWillMount() {      
    }

    __onAttractionChange(e: Object, value): boolean {
    }

    render() {        
        let attractions = [  
            {  
               "id":"10003",
               "name":"Legoland Florida Resort"
            },
            {  
               "id":"10006",
               "name":"Dollywoods DreamMore Resort"
            },
            {  
               "id":"1002",
               "name":"Georgia Aquarium"
            },
            {  
               "id":"1009",
               "name":"Shedd Aquarium"
            },
            {  
               "id":"1017",
               "name":"The Florida Aquarium"
            },
            {  
               "id":"1085",
               "name":"Marineland Dolphin Adventures"
            },
            {  
               "id":"3005",
               "name":"Colorado Mesa University"
            },
            {  
               "id":"8001",
               "name":"Jacksonville Zoo"
            },
            {  
               "id":"8055",
               "name":"Greensboro Science Center"
            },
            {  
               "id":"8063",
               "name":"The Field Museum of Natural History"
            },
            {  
               "id":"8240",
               "name":"Dollywood Theme Park"
            },
            {  
               "id":"8244",
               "name":"Dollywoods Splash Country"
            },
            {  
               "id":"8250",
               "name":"Denver Museum Of Nature And Science"
            },
            {  
               "id":"8261",
               "name":"National Basketball Association"
            },
            {  
               "id":"8265",
               "name":"NBA Survey"
            }
         ];
        const myList = attractions.map((i, index) => (
        <option value={i.id} data-icon={require('../../../public/assets/images/Customers/' + i.id + '.jpg')} >{i.name}</option>
        ));

        return (          
             <TatvamInput multiple type='select'  className="attraction" onChange={this.__onAttractionChange.bind(this)}>
                {myList}
            </TatvamInput>
         
           
        );
    }
}

export default Attraction;