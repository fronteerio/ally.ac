$(document).ready(function() {

    var bundles = {
        'en': {
            'ABOUT_BLACKBOARD': 'About Blackboard',
            'ALLY_AVAILABLE_CANVAS': 'Ally is now available on your Canvas environment.',
            'ALLY_AVAILABLE_LEARN': 'Ally is now available on your Blackboard Learn environment.',
            'ALLY_AVAILABLE_MOODLE': 'Ally is now available on your Moodle environment.',
            'ALLY_AVAILABLE_OPEN_LMS': 'Ally is now available on your Blackboard Open LMS environment.',
            'ALLY_AVAILABLE_WCM': 'Ally is now available on your Web Community Manager environment.',
            'BLACKBOARD_ADDRESS': '1111 19th Street NW, 9th Floor Washington, DC 20036 USA',
            'BLACKBOARD_COPYRIGHT': '© 1997 - 2017 Blackboard Inc. All rights reserved.',
            'CONGRATULATIONS': 'Congratulations!',
            'CONTACTS_US': 'Contact us',
            'GIVE_FEEDBACK': 'Give Feedback',
            'JOIN_USER_GROUP': 'Join User Group',
            'JOIN_USER_GROUP_DESCRIPTION': 'Join the Ally User Group to receive the latest Ally news, engage with the Ally community and help shape the future of Ally.',
            'MANAGE_YOUR_PREFERENCES': 'Manage your preferences',
            'PRIVACY_POLICY': 'Privacy policy',
            'SUPPORT_BEHIND_BLACKBOARD': 'Ally will become an extra option in the Behind the Blackboard™ support portal. Your current credentials will not change.',
            'SUPPORT_NEW': 'If you are new to Blackboard, you will receive a separate email containing credentials to access the Behind the Blackboard™ support portal.',
            'SUPPORT_PORTAL': 'Support Portal',
            'TELL_US_HOW_WE_DID': 'Tell us how we did on your implementation!',
            'VIEW_ALLY_DOCUMENTATION': 'View Ally documentation'
        },
        'es': {
            'ALLY_AVAILABLE_LEARN': 'Ally ya está disponible en su entorno Blackboard Learn.',
            'CONGRATULATIONS': '¡Felicidades!',
            'GIVE_FEEDBACK': 'Dar opinion',
            'JOIN_USER_GROUP': 'Únete al grupo de usuarios',
            'JOIN_USER_GROUP_DESCRIPTION': 'Únete al grupo de usuarios de Ally para recibir las últimas noticias de Ally, participa con la comunidad de Ally y ayuda a dar forma al futuro de Ally.',
            'SUPPORT_BEHIND_BLACKBOARD': 'Ally se convertirá en una opción adicional en el portal de soporte Behind the Blackboard ™. Sus credenciales actuales no cambiarán.',
            'SUPPORT_PORTAL': 'Portal de Soporte',
            'TELL_US_HOW_WE_DID': '¡Cuéntanos cómo lo hicimos en tu implementación!',
            'VIEW_ALLY_DOCUMENTATION': 'Ver documentación de Ally'
        }
    };

    var qs = $.url(document.location).param();
    qs.sh = qs.sh || false;
    qs.lang = qs.lang || 'en';

    var translate = function(key) {
        return (bundles[qs.lang] && bundles[qs.lang][key] ? bundles[qs.lang][key] : bundles['en'][key]);
    };

    var params = {
        'qs': qs,
        'translate': translate
    };

    var template = _.template($("#template").html());
    $("#container").html(template(params));
});