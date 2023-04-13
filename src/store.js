import { reactive } from 'vue'
export const store = reactive({
    clients: [
        {
            name: 'Luis Desalvo',
            img: '../img/testimonials-2.jpg',
            agency: 'CREO TECH',
            review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, laboriosam."
        },
        {
            name: 'Luisa Desole',
            img: '../img/testimonials-1.jpg',
            agency: 'LUISA SPA',
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, reiciendis."
        }
    ],
    current_client: 0,
});