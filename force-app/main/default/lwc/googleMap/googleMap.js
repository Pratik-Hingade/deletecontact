import { LightningElement } from 'lwc';
export default class GoogleMap extends LightningElement {
    showMap=false;
    handleMapShow(){
     this.showMap=true;
    }
    handleMapHide(){
        this.showMap=false;
    }
    mapMarkers = [
        {
            location: {
                PostalCode:'411030',
                Street: 'Shaniwar Wada, Pune, Maharashtra 411030',
                City: 'Pune',
                State: 'Maharashtra',
                country:'India',
            },
            title: 'Shaniwar Wada',
            description:
                'A grand setting for one of the greatest collections of art, from ancient to contemporary.',
        },
        {
            location: {
                PostalCode:'411002',
                Street: 'Shreemant Dagdusheth Halwai Ganpati Mandir,Pune, Maharashtra 411002',
                City: 'Pune',
                State: 'Maharashtra',
                country:'India',
            },

            title: 'Shreemant Dagdusheth Halwai Ganpati Mandir',
            description: 'Thought-provoking modern and contemporary art.',
        },
        {
            location: {
            PostalCode:'411025',
            Street: 'Sinhagad Fort, Thoptewadi, Maharashtra 411025',
            City: 'Pune',
            State: 'Maharashtra',
            country:'India',
        },
        title: 'Sinhagad Fort',
        description:
            'A grand setting for one of the greatest collections of art, from ancient to contemporary.',
        },
        {
            location: {
                PostalCode:'411011',
                Street: ' Lal Mahal,Pune, Maharashtra 411011',
                City: 'Pune',
                State: 'Maharashtra',
                country:'India',
            },

            title: 'Lal Mahal',
            description: 'Thought-provoking modern and contemporary art.',
        },
        {
            location: {
                PostalCode:'411030',
                Street: 'Pune-Okayama Friendship Garden,Pune, Maharashtra 411030',
                City: 'Pune',
                State: 'Maharashtra',
                country:'India',
            },

            title: 'Pune-Okayama Friendship Garden',
            description: 'Thought-provoking modern and contemporary art.',
        },
        {
            location: {
                PostalCode:'411002',
                Street: 'Aga Khan Palace,Pune, Maharashtra 411006',
                City: 'Pune',
                State: 'Maharashtra',
                country:'India',
            },

            title: 'Aga Khan Palace',
            description: 'Thought-provoking modern and contemporary art.',
        }
        
    ];
    zoomLevel = 10;
    markersTitle = 'Coordinates for Centering';

    // center = {
    //     location: { Latitude: '18.5195° N', Longitude: '73.8553° E' },
    // };
}