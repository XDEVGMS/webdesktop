// =============
// + RENDER.js +
// =============
const appsList = (x) => {
  $(x).append(`<div id="app-1" class="app-content current">
          <div class="popup">
            <div id="apps">
              <a href="https://google.com" target="_blank">
                <div class="app study_focus_mode relaxation_focus_mode">
                  <i class="lab la-google"></i>
                  <span>Google</span>
                </div></a
              >
              <a href="https://www.bing.com" target="_blank">
                <div class="app study_focus_mode">
                  <span>Bing</span>
                  <i class="lab la-microsoft"></i></div
              ></a>
              <a href="https://yahoo.com" target="_blank">
                <div class="app study_focus_mode programming_focus_mode">
                  <span>Yahoo</span>
                  <i class="lab la-yahoo"></i></div
              ></a>
              <a href="https://yandex.com" target="_blank">
                <div class="app relaxation_focus_mode">
                  <span>Yandex</span>
                  <i class="lab la-yandex"></i></div
              ></a>

              <a href="https://chat.lmsys.org/" target="_blank">
                <div class="app relaxation_focus_mode">
                  <span>IA Chat</span>
                  <i class="las la-paw"></i></div
              ></a>
			  <a href="https://weathermetro.com" target="_blank">
                <div class="app relaxation_focus_mode">
                  <span>Clima</span>
                  <i class="las la-sun"></i></div
              ></a>
			  <a href="https://www.youtube.com/" target="_blank">
                <div class="app study_focus_mode relaxation_focus_mode">
                  <i class="lab la-youtube"></i>
                  <span>Youtube</span>
                </div></a
              >
              <a href="https://www.msn.com" target="_blank">
                <div class="app study_focus_mode">
                  <span>MSN</span>
                  <i class="lab la-windows"></i></div
              ></a>
              <a href="https://arcadeok.com" target="_blank">
                <div class="app study_focus_mode programming_focus_mode">
                  <span>Games</span>
                  <i class="las la-gamepad"></i></div
              ></a>
              <a href="https://www.reddit.com/" target="_blank">
                <div class="app relaxation_focus_mode">
                  <span>Reddit</span>
                  <i class="lab la-reddit"></i></div
              ></a>

              <a href="https://www.wikipedia.org/" target="_blank">
                <div class="app relaxation_focus_mode">
                  <span>Wikipe..</span>
                  <i class="lab la-wikipedia-w"></i></div
              ></a>
			  <a href="https://fast.com/es/" target="_blank">
                <div class="app relaxation_focus_mode">
                  <span>Fast</span>
                  <i class="las la-tachometer-alt"></i></div
              ></a>
            </div>
          </div>
        </div>
        
        <div id="app-2" class="app-content">
          <div class="popup">
            <div id="apps">
              <a href="https://mail.google.com" target="_blank">
                <div class="app">
                  <i class="las la-envelope"></i>
                  <span>Gmail</span>
                </div></a>
              
                 <a href="https://live.com" target="_blank">
                <div class="app">
                  <i class="las la-envelope"></i>
                  <span>Outlook</span>
                </div></a
              >

              <a href="https://mail.yahoo.com" target="_blank">
                <div class="app">
                  <i class="las la-envelope"></i>
                  <span>Yahoo</span>
                </div></a>
              <a href="https://mail.aol.com" target="_blank">
                <div class="app">
                  <i class="las la-envelope"></i>
                  <span>AOL</span>
                </div></a
              >
              <a href="https://zoho.com/mail/" target="_blank">
                <div class="app">
                  <i class="las la-envelope"></i>
                  <span>Zoho</span>
                </div></a
              >
			  <a href="https://haveibeenpwned.com/" target="_blank">
                <div class="app">
                  <i class="las la-envelope"></i>
                  <span>V.e-Mail</span>
                </div></a
              >
			  <a href="https://proton.me/mail/" target="_blank">
                <div class="app">
                  <i class="las la-envelope"></i>
                  <span>Proton</span>
                </div></a>
              
                 <a href="https://mail.netease.com" target="_blank">
                <div class="app">
                  <i class="las la-envelope"></i>
                  <span>Netease</span>
                </div></a
              >

              <a href="https://mail.qq.com" target="_blank">
                <div class="app">
                  <i class="las la-envelope"></i>
                  <span>QQ</span>
                </div></a>
              <a href="https://mail.com" target="_blank">
                <div class="app">
                  <i class="las la-envelope"></i>
                  <span>Mail.com</span>
                </div></a
              >
              <a href="https://gmx.com/mail/" target="_blank">
                <div class="app">
                  <i class="las la-envelope"></i>
                  <span>GMX</span>
                </div></a
              >
			  <a href="https://mail.yandex.com" target="_blank">
                <div class="app">
                  <i class="las la-envelope"></i>
                  <span>Yandex</span>
                </div></a
              >
            </div>
          </div>
        </div>

        <div id="app-3" class="app-content">
          <div class="popup">
            <div class="popup">
              <div id="apps">
                <a href="https://www.instagram.com/" target="_blank">
                  <div class="app">
                    <i class="lab la-instagram"></i>
                    <span>Instagr..</span>
                  </div></a
                >
                <a href="https://x.com" target="_blank">
                  <div class="app">
                    <i class="lab la-twitter"></i>
                    <span>X.com</span>
                  </div></a
                >
			    <a href="https://www.facebook.com/" target="_blank">
                  <div class="app">
                    <i class="lab la-facebook"></i>
                    <span>Facebo..</span>
                  </div></a
                >
                <a href="https://www.linkedin.com/" target="_blank">
                  <div class="app">
                    <i class="lab la-linkedin"></i>
                    <span>Linkedin</span>
                  </div></a
                >
				<a href="https://www.tiktok.com/" target="_blank">
                  <div class="app">
                    <i class="las la-file-audio"></i>
                    <span>TikTok</span>
                  </div></a
                >
                <a href="https://vk.com" target="_blank">
                  <div class="app">
                    <i class="lab la-vk"></i>
                    <span>Vk</span>
                  </div></a
                >
				<a href="https://www.twitch.tv/" target="_blank">
                  <div class="app">
                    <i class="lab la-twitch"></i>
                    <span>Twitch</span>
                  </div></a
                >
                <a href="https://www.snapchat.com/" target="_blank">
                  <div class="app">
                    <i class="lab la-snapchat"></i>
                    <span>Snapchat</span>
                  </div></a
                >
				<a href="https://pinterest.com" target="_blank">
                  <div class="app">
                    <i class="lab la-pinterest"></i>
                    <span>Pinterest</span>
                  </div></a
                >
                <a href="https://reddit.com" target="_blank">
                  <div class="app">
                    <i class="lab la-reddit"></i>
                    <span>Reddit</span>
                  </div></a
                >
				<a href="https://web.telegram.com" target="_blank">
                  <div class="app">
                    <i class="lab la-telegram"></i>
                    <span>Telegram</span>
                  </div></a
                >
                <a href="https://web.whatsapp.com" target="_blank">
                  <div class="app">
                    <i class="lab la-whatsapp"></i>
                    <span>Whats..</span>
                  </div></a
                >
              </div>
            </div>
          </div>
        </div>

<div id="app-5" class="app-content">
          <div class="popup">
            <div class="popup">
              <div id="apps">
                <a href="https://worldchat.tv" target="_blank">
                  <div class="app">
                    <i class="las la-comment"></i>
                    <span>WorldC..</span>
                  </div></a
                >
                <a href="https://liveeds.com" target="_blank">
                  <div class="app">
                    <i class="las la-comments"></i>
                    <span>Liveeds</span>
                  </div></a
                >
				<a href="https://slappydoo.com" target="_blank">
                  <div class="app">
                    <i class="las la-camera"></i>
                    <span>Slappy..</span>
                  </div></a
                >
                <a href="https://www.omegle.com/" target="_blank">
                  <div class="app">
                    <i class="las la-headset"></i>
                    <span>Omegle</span>
                  </div></a
                >
				<a href="https://www.foxrefs.com" target="_blank">
                  <div class="app">
                    <i class="las la-video"></i>
                    <span>Random</span>
                  </div></a
                >
                <a href="https://messenger.com/" target="_blank">
                  <div class="app">
                    <i class="lab la-facebook-messenger"></i>
                    <span>Messen..</span>
                  </div></a
                >
              </div>
            </div>
          </div>
        </div>

<div id="app-6" class="app-content">
          <div class="popup">
            <div class="popup">
              <div id="apps">
                <a href="https://expirebox.com" target="_blank">
                  <div class="app">
                    <i class="las la-cloud-upload-alt"></i>
                    <span>Share</span>
                  </div></a
                >
                <a href="https://virtualpiano.eu" target="_blank">
                  <div class="app">
                    <i class="las la-music"></i>
                    <span>Piano</span>
                  </div></a
                >
				<a href="https://combopix.com" target="_blank">
                  <div class="app">
                    <i class="las la-robot"></i>
                    <span>AI img</span>
                  </div></a
                >
				<a href="https://upperpix.com" target="_blank">
                  <div class="app">
                    <i class="las la-image"></i>
                    <span>Editor</span>
                  </div></a
                >
				<a href="https://avatarmake.com" target="_blank">
                  <div class="app">
                    <i class="las la-user-circle"></i>
                    <span>Avatar</span>
                  </div></a
                >
				<a href="https://convertery.com" target="_blank">
                  <div class="app">
                    <i class="las la-tools"></i>
                    <span>Tools</span>
                  </div></a
                >
				<a href="https://photosearch.tv" target="_blank">
                  <div class="app">
                    <i class="las la-camera"></i>
                    <span>Search</span>
                  </div></a
                >
                <a href="https://translate.google.com/" target="_blank">
                  <div class="app">
                    <i class="las la-spell-check"></i>
                    <span>Transl..</span>
                  </div></a
                >
				<a href="https://www.google.com/maps" target="_blank">
                  <div class="app">
                   <i class="las la-map-marked-alt"></i>
                    <span>GMaps</span>
                  </div></a
                >
				<a href="https://trackingcode.net/" target="_blank">
                  <div class="app">
                   <i class="las la-shipping-fast"></i>
                    <span>Track..</span>
                  </div></a
                >
				<a href="https://deliverbit.com" target="_blank">
                  <div class="app">
                    <i class="las la-laptop-code"></i>
                    <span>Apps</span>
                  </div></a
                >
				<a href="https://www.virustotal.com/gui/home/upload" target="_blank">
                  <div class="app">
                  <i class="las la-shield-alt"></i>
                    <span>V.Total</span>
                  </div></a
                >
              </div>
            </div>
          </div>
        </div>

<div id="app-7" class="app-content">
          <div class="popup">
            <div class="popup">
              <div id="apps">
                <a href="https://amazon.com/" target="_blank">
                  <div class="app">
                    <i class="lab la-amazon"></i>
                    <span>Amazon</span>
                  </div></a
                >
                <a href="https://ebay.com" target="_blank">
                  <div class="app">
                    <i class="lab la-ebay"></i>
                    <span>Ebay</span>
                  </div></a
                >
				<a href="https://www.etsy.com/" target="_blank">
                  <div class="app">
                    <i class="lab la-etsy"></i>
                    <span>Etsy</span>
                  </div></a
                >
				<a href="https://www.aliexpress.com/" target="_blank">
                  <div class="app">
                    <i class="lab la-alipay"></i>
                    <span>Aliexp..</span>
                  </div></a
                >
				<a href="https://shopping.google.com/" target="_blank">
                  <div class="app">
                    <i class="lab la-google"></i>
                    <span>GShop</span>
                  </div></a
                >
				<a href="https://www.shein.com/" target="_blank">
                  <div class="app">
                    <i class="las la-tshirt"></i>
                    <span>Shein</span>
                  </div></a
                >
              </div>
            </div>
          </div>
        </div>

        
                <div id="app-4" class="app-content">
          <div class="popup">
            <div class="popup">
              <div class="popup">
                <div id="apps">
                  <a href="https://youtube.com" target="_blank">
                    <div class="app">
                      <i class="lab la-youtube"></i>
                      <span>YouTube</span>
                    </div></a
                  >
                  <a href="https://netflix.com" target="_blank">
                    <div class="app programming_focus_mode">
                      <i class="las la-film"></i>
                      <span>Netflix</span>
                    </div></a
                  >
                  <a href="https://primevideo.com" target="_blank">
                    <div class="app programming_focus_mode">
                      <i class="lab la-amazon"></i>
                      <span>Prime</span>
                    </div></a
                  >
                <a href="https://vimeo.com" target="_blank">
                <div class="app">
                  <i class="lab la-vimeo"></i>
                  <span>Vimeo</span>
                </div></a
              >
                  <a href="https://dailymotion.com" target="_blank">
                    <div class="app">
                      <i class="las la-video"></i>
                      <span>Daily</span>
                    </div></a
              >
				  <a href="https://www.4chan.org" target="_blank">
                <div class="app">
                  <i class="las la-icons"></i>
                  <span>4Chan</span>
                </div></a
              >
				<a href="https://archive.org/details/movies/" target="_blank">
                    <div class="app">
                      <i class="las la-landmark"></i>
                      <span>Archive</span>
                    </div></a
                  >
                  <a href="https://9gag.com" target="_blank">
                    <div class="app programming_focus_mode">
                      <i class="las la-laugh-squint"></i>
                      <span>9gag</span>
                    </div></a
                  >
                  <a href="https://radiobrowser.com" target="_blank">
                    <div class="app programming_focus_mode">
                      <i class="las la-music"></i>
                      <span>Radio</span>
                    </div></a
                  >
                <a href="https://spotify.com" target="_blank">
                <div class="app">
                  <i class="lab la-spotify"></i>
                  <span>Spotify</span>
                </div></a
              >
                  <a href="https://soundcloud.com" target="_blank">
                    <div class="app">
                      <i class="lab la-soundcloud"></i>
                      <span>Soundc..</span>
                    </div></a
              >
				  <a href="https://imgur.com/" target="_blank">
                <div class="app">
                  <i class="las la-photo-video"></i>
                  <span>Imgur</span>
                </div></a
              >
                </div>
              </div>
            </div>
          </div>
        </div>`);
};

const settingAbout = (z) => {
  $(z).append(`<div id="tab-3" class="tab-content">
              <p class="settings-item-title">Acerca de WebKey Desktop</p>
              <p class="settings-item-under-title description">WebKey Desktop, página de inicio e información.</p>
            <div class="settings-background">
              <p class="new-about">
              <img 
              style="margin-left: auto;
              padding-top:30px;
              margin-right: auto;
              display: block;"
                  src="assets/img/logo.png"
                  loading="lazy"
                  title="Logo"
                  alt="Saturn-logo.png"
                  /> 
            <p style="text-align:center;font-size:23px;" class="settings-item-title">WebKey Desktop</p>
            <p style="text-align:center;font-weight:500;margin-top:-15px;">
            <a  href="https://sourceforge.net/u/xdevgms/profile/" target="_blank"><i class="la la-globe"></i> Repositorio XDEV</a><br><br>
            </p>
               
<script>
var a2a_config = a2a_config || {};
a2a_config.onclick = 1;
</script>

<p> 
Esta es una página de inicio personalizable para cualquier navegador web, úsela para reemplazar su página de inicio actual y obtener más funciones sin el uso de ninguna cuenta. De hecho, todas las personalizaciones se almacenan en su navegador y no en una base de datos del sitio.<p><i class="las la-exclamation-triangle"></i> No conservamos su información ni sus hábitos.</p><br>
Con nuestra página de inicio personalizada podrás crear una lista de tus enlaces favoritos y tenerlos siempre en primer plano, cambiar el aspecto y los colores de la página de inicio, personalizarla con tu nombre, elegir el motor de búsqueda, cambiar el fondo...
<br>
</p>
<br><br>

</ul>
</div>


          </div>`);
};

const kShortcuts = (ks) => {
  $(ks).append(`<!-- + Keyboard Shortcuts section + -->
          <div id="tab-5" class="tab-content">
            <p class="settings-item-title">Atajos de teclado</p>
            <p class="settings-item-under-title description">Los atajos te permiten hacer cosas sin necesidad de tocar 
            el mouse.</p>
            <div class="settings-background">
              <p class="dropdown-seperator settings-seperator">
                <span>General</span>
              </p>
              <p></p>
              <p> Presione <kbd>Ctrl</kbd> + <kbd>/</kbd> para enfocar la barra de búsqueda.</p>
              <p> Presione <kbd>Ctrl</kbd> + <kbd><i class="las la-caret-square-up"></i></kbd> (Flecha arriba) para cambiar entre motores de búsqueda.</p>
              <p> Presione <kbd>Shift</kbd> + <kbd>S</kbd> para abrir y cerrar el menú de configuración. </p>
              <p></p>
              <p> Presione <kbd>Shift</kbd> + <kbd>Z</kbd> para abrir el menú Agregar favoritos. </p>
              <p> Presione <kbd>Shift</kbd> + <kbd>B</kbd> para abrir la caja de resonancia. </p>
              <p> Presione <kbd>Esc</kbd> para cerrar cualquier Opción.</p>
              <p> Presione <kbd>Ctrl</kbd> + <kbd>M</kbd> para silenciar el audio. (Proporcionado por Firefox) </p>
             
            </div>
             <p style="text-align: center; font-weight: 500; font-size: 13px">
                
              </p>
          </div>`);
};

const coolbg = (cbg) => {
  $(cbg).append(`<div class="fav_ptgi">
            <ul class="fav_ptgi_category">
              <a
                href="https://unsplash.com"
                title="Ir a Unsplash..."
                target="_blank"
              >
              <li class="fav_ptgi_btn"><img src="https://unavatar.io/unsplash.com" loading="lazy"> Unsplash</li></a
              >
              <a
                href="https://wallpaperaccess.com"
                title="Ir a Wallpaperaccess..."
                target="_blank"
              >
              <li class="fav_ptgi_btn"><img src="https://unavatar.io/wallpaperaccess.com" loading="lazy"> Wallpaperaccess</li></a
              >
              <a
              href="https://coolbackgrounds.io/"
              title="Ir a Coolbackgrounds..."
              target="_blank"
            >
            <li class="fav_ptgi_btn"><img src="https://unavatar.io/coolbackgrounds.io" loading="lazy"> Coolbackgrounds</li></a
            >
<a
                href="https://photosearch.tv"
                title="Ir a PhotoSearch..."
                target="_blank"
              >
              <li class="fav_ptgi_btn"><img src="https://unavatar.io/photosearch.tv" loading="lazy"> PhotoSearch</li></a
              >
            
            </ul>
          </div>`);
};

const render_in_js = (x, z, ks, cu, cbg) => {
  let apps_list = $("#apps_list");
  let setting_about = $("#setting_about");
  let kshortcuts = $("#k_shortcuts");
  let cool_background = $("#cool_backgrounds");

  // pls dont break
  loader = setTimeout(function () {
    appsList(apps_list);
    settingAbout(setting_about);
    kShortcuts(kshortcuts);
    coolbg(cool_background);
  });
};

window.onload = render_in_js();
