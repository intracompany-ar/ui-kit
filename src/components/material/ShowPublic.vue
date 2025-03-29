<script setup lang="ts">
defineProps(['rows'])

const share = () => {
    // const url = window.location.href;
    // const title = 'Compartir este producto';
    // const text = 'Mira este producto increíble que encontré:';
    
    // if (navigator.share) {
    //     navigator.share({
    //         title,
    //         text,
    //         url
    //     })
    //     .then(() => console.log('Compartido con éxito'))
    //     .catch((error) => console.error('Error al compartir:', error));
    // } else {
    //     // Fallback para navegadores que no soportan la API de compartir
    //     alert(`Copia y pega este enlace: ${url}`);
    // }
};
</script>

<template>
    <v-container>
        <v-row>
            <v-col>
                <!-- cant de vendidos en chiquito y gris -->
                <div class="text-h6">{{ rows.name }}</div>
                <!-- TODO: agregar un title marketinero, en backend -->
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" sm="6" md="4">
                <v-card>
                    <!-- Carrousel de fotos -->
                    <v-img
                        :src="rows.image"
                        height="200px"
                    ></v-img>
                    <!-- <v-card-actions class="d-flex justify-end">
                        <a v-on:click.prevent="share" href="#">
                            <i class="fas fa-share-nodes fa-2x"></i>
                        </a>
                    </v-card-actions> -->
                </v-card>
            </v-col>
            <v-col cols="12" sm="6" md="4">
                <v-card>
                    <v-card-title>Precio</v-card-title>
                    <v-card-subtitle>{{ rows.price }}</v-card-subtitle>
                    <v-card-actions>
                        <v-btn color="primary">Ver más</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col cols="12" sm="6" md="4">
                <v-card>
                    <v-card-title>Vendedor</v-card-title>
                    <v-card-subtitle>{{ rows.seller }}</v-card-subtitle>
                    <v-card-actions>
                        <v-btn color="primary">Ver perfil</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
        
        <div>
            Col 1
            Fotos
            +
            boton compartir
        </div>
        <div>
            Precios y descuentos
            <br>
            Medios de pago (link)
            <br>
            Envio y retiro
            <br>
            Stock disponigle
            <br>
            botón comprar en la misma pantalla que celu
        </div>
        <div>
            Vendedor y cantidad de ventas
            <br>
            Devolución gratis
            <br>
            Garantía
            <br>
            Descripción
            <br>
            indice de velocia
            <br>
            indice de carga
            <br>
            tamaño y rodado
            <br>
            carga maxima
            <br>
            diseo de banda
            <br>
            es para nieve
            <br>
            es direccional
            <br>
            CARACTERÍSTICAS
            veloc maxima, tipo terreno, tamaño
            (Ver mas)
        </div>
        Vista pública de artículo
    <div> Productos relacionados</div>
    <div> Preguntas y respuestas</div>
</template>