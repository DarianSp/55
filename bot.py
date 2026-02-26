import os
from imvu_api import Client # Usando la lógica de las librerías de GitHub
import subprocess

# Cargar datos de tu cuenta Guest_MusicBOT1
USER = "Guest_MusicBOT1"
PASS = "Polanco01@"
ROOM = "176627912-262" # Tu ID de sala

def start_radio(url):
    # FFmpeg convierte el audio para que IMVU lo acepte como voz
    # Esto "emite" el audio hacia el canal de voz de la sala
    cmd = f"ffmpeg -i {url} -f s16le -ac 1 -ar 48000 pipe:1"
    return subprocess.Popen(cmd, shell=True, stdout=subprocess.PIPE)

def main():
    bot = Client()
    if bot.login(USER, PASS):
        print("¡Bot conectado con éxito!")
        bot.join_room(ROOM)
        
        # Ejemplo: Escuchar comandos del chat
        @bot.event
        def on_message(msg):
            if msg.content.startswith("!pon"):
                song_url = msg.content.split(" ")[1]
                start_radio(song_url)
                bot.send_chat("🎶 Reproduciendo ahora...")

main()