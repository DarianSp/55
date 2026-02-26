import subprocess
from yt_dlp import YoutubeDL
from imvu_api import Client # Librería estándar de la comunidad

# Configuración de extracción (Solo Audio)
YDL_OPTIONS = {
    'format': 'bestaudio/best',
    'noplaylist': 'True',
    'postprocessors': [{
        'key': 'FFmpegExtractAudio',
        'preferredcodec': 'mp3',
        'preferredquality': '192',
    }],
}

def get_audio_url(search_query):
    with YoutubeDL(YDL_OPTIONS) as ydl:
        # Busca el primer video que coincida
        info = ydl.extract_info(f"ytsearch:{search_query}", download=False)['entries'][0]
        return info['url'], info['title']

# --- Lógica del Bot ---
bot = Client()
bot.login("Guest_MusicBOT1", "Polanco01@")
bot.join_room("176627912-262")

@bot.event
def on_message(message):
    if message.content.startswith("!play "):
        busqueda = message.content.replace("!play ", "")
        bot.send_chat(f"🔍 Buscando: {busqueda}...")
        
        try:
            url_audio, titulo = get_audio_url(busqueda)
            bot.send_chat(f"🎶 Reproduciendo: {titulo}")
            
            # Comando mágico de FFmpeg para transmitir al chat de voz
            # Esto envía el stream directamente al "micrófono" del bot
            subprocess.run([
                'ffmpeg', '-i', url_audio, 
                '-f', 's16le', '-ac', '1', '-ar', '48000', 'pipe:1'
            ])
        except Exception as e:
            bot.send_chat("❌ Error al encontrar la canción.")

bot.run()