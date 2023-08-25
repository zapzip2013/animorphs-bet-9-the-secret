GS.dataCache['F972DF4D2F236846F329478586D4818B39E7'] = {
    "uid": "F972DF4D2F236846F329478586D4818B39E7",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "termite time",
        "type": "vn.scene",
        "parentId": "CD487BC889B4D1462589E59210627F40D078",
        "chapterUid": "CD487BC889B4D1462589E59210627F40D078",
        "order": 1,
        "localizableStrings": {},
        "commands": [
            {
                "id": "gs.CreateMessageArea",
                "params": {
                    "numberDomain": "com.degica.vnm.default",
                    "number": 0,
                    "box": {
                        "x": 108,
                        "y": 56,
                        "angle": 0,
                        "zoom": 1,
                        "data": {},
                        "color": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "alpha": 160
                        },
                        "size": {
                            "width": 1048,
                            "height": 580
                        }
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0
            },
            {
                "id": "gs.ChangeBooleanVariables",
                "params": {
                    "target": 0,
                    "targetReferenceDomain": "com.degica.vnm.default",
                    "targetReference": {
                        "index": 0,
                        "scope": 1,
                        "domain": "com.degica.vnm.default"
                    },
                    "targetVariable": {
                        "name": "digfail",
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default",
                        "changed": true
                    },
                    "targetRangeScope": 0,
                    "rangeStart": 0,
                    "rangeEnd": 0,
                    "value": 0,
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "B3894D3F3FC5E645F82B3A6542DE65225014"
            },
            {
                "id": "gs.SetTargetMessage",
                "params": {
                    "id": "gameMessage_message",
                    "numberDomain": "com.degica.vnm.default",
                    "number": 0,
                    "type": 1,
                    "clear": 1
                },
                "indent": 0,
                "uid": "3238529B2BA3144496185763C34FD261FB30"
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "All of us Animorphs dream. We dream of our worst morphs. The morphs you never want to try again. In my dreams, I'm in a tunnel. I see huge metallic-looking heads of enemy ants crashing through the tunnel walls, locking their pincers on me and my friends, and tearing, slicing, pulling us to pieces. I thought I was going to die. Ants were the worst morph I had done at the time, and termites? Well, in a lot of ways, they're very similar to ants.\n\nWe all met up by the cabin at 3 in the morning, morphed owls to get close to the forcefield, and that brought us to now. Rachel just made a silly comment, but looking into her eyes, I can tell even she's afraid of what's going to happen tonight."
                    },
                    "position": 0,
                    "characterId": "9D3AF5CB63721244547AD735F84901AEBC1D",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "B588B3029A55E74FDA2942F63852B1C66AD0",
                "expanded": true
            },
            {
                "id": "gs.PlayMusic",
                "params": {
                    "layer": 0,
                    "loop": 1,
                    "music": {
                        "folderPath": "Audio/Music",
                        "name": "Sad_-_Wistful_Longing.ogg",
                        "volume": 100,
                        "playbackRate": "50"
                    },
                    "fadeInDuration": 0,
                    "playTime": {
                        "min": 10,
                        "max": 30
                    },
                    "playRange": {
                        "start": 10,
                        "end": 20
                    },
                    "playType": 0,
                    "waitForCompletion": 0,
                    "fieldFlags": {
                        "music.volume": 1,
                        "music.playbackRate": 0,
                        "fadeInDuration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "4CD961AE2366154150398CA0CCD21182D68A"
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "I start to morph. I'm falling, down down down down down. I never hit the ground, but I'm falling, becoming an insect less than a quarter of an inch long. I see Rachel's face bulge out into monstrously big mandibles, and then I can't see anything at all. I feel antennae popping out of my head, and extra legs growing from my sides. My abdomen is swelling, and massive pincers, like Rachel's, grow where my mouth was before. I had expected the termite mind to take over, to lose myself like I had with the ant, but the termite mind is silent.   "
                    },
                    "position": 0,
                    "characterId": "9D3AF5CB63721244547AD735F84901AEBC1D",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "F8CD9F1D5A69454373686E28A86DF6BA9565",
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "<Is everyone okay?> I ask the group.\nA quick response from rachel,<Yeah, I'm okay. I just can't see anything.>\n<Termites are blind,> I reply, but I notice I sense something. A direction, calling to me. <Do you guys feel that?>\n<Yeah,> Marco says, <Like something yelling, a long way off.>\n<Let's follow that,> Rachel says.\n\nI set out toward the vague distance voice, assuming my friends were following, but I can't see feel or hear them. Eventually, I find before me what can only be a forcefield. My termite legs keep hammering away, but I'm not moving forward."
                    },
                    "position": 0,
                    "characterId": "9D3AF5CB63721244547AD735F84901AEBC1D",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "6869B60E27D0E54A33683C9612DCA5E1863D",
                "expanded": true
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "shield"
                },
                "indent": 0,
                "uid": "CA81012E1B46B94FE27AC6D1E71AE33BB709"
            },
            {
                "id": "vn.Choice",
                "params": {
                    "action": {
                        "type": 0,
                        "bindValue": 0,
                        "bindValueVariable": {
                            "scope": 0,
                            "index": 0
                        },
                        "commonEventId": 0,
                        "label": "dig",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": null,
                        "defaultText": "Try to dig under it"
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 0,
                    "box": {
                        "x": 0,
                        "y": 0,
                        "size": {
                            "width": 300,
                            "height": 50
                        }
                    },
                    "defaultChoice": 0
                },
                "indent": 0,
                "uid": "40D8C8ED5A66114FBD192991D5B90F940703"
            },
            {
                "id": "vn.Choice",
                "params": {
                    "action": {
                        "type": 0,
                        "bindValue": 0,
                        "bindValueVariable": {
                            "scope": 0,
                            "index": 0
                        },
                        "commonEventId": 0,
                        "label": "give up",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": null,
                        "defaultText": "Give up and turn around"
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 0,
                    "box": {
                        "x": 0,
                        "y": 0,
                        "size": {
                            "width": 300,
                            "height": 50
                        }
                    },
                    "defaultChoice": 0
                },
                "indent": 0,
                "uid": "029EBAED20F2C240F81B7304264E6B18C883"
            },
            {
                "id": "gs.Condition",
                "params": {
                    "variable": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "numberValue": 0,
                    "textValue": "",
                    "switchValue": 1,
                    "valueType": 1,
                    "operation": 0
                },
                "indent": 0,
                "uid": "D928D2A66BEA384B6D6895B9C96F38A8191E"
            },
            {
                "id": "vn.Choice",
                "params": {
                    "action": {
                        "type": 0,
                        "bindValue": 0,
                        "bindValueVariable": {
                            "scope": 0,
                            "index": 0
                        },
                        "commonEventId": 0,
                        "label": "pine needle",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": null,
                        "defaultText": "Look for something to squeeze under."
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 0,
                    "box": {
                        "x": 0,
                        "y": 0,
                        "size": {
                            "width": 300,
                            "height": 50
                        }
                    },
                    "defaultChoice": 0
                },
                "indent": 1,
                "uid": "57B1210462971145036A2AF91DD6D7CFCF3E"
            },
            {
                "id": "vn.ShowChoices",
                "params": {},
                "indent": 0,
                "uid": "00F9C318779DB8440B59FD06623C4921CB93"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "give up"
                },
                "indent": 0,
                "uid": "692144111345614A02588CE9E837340B04AF"
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "I don't know what I'm doing. I can't get through this forcefield, I turn around and go home. We've abandoned Jake, and the forrest will be plowed. I guess we'll have to try to hide Ax in my barn, but that can't last forever. Thatwas...a bad decision. If only the Ellimist would take notice and send me back to make it again."
                    },
                    "position": 0,
                    "characterId": "9D3AF5CB63721244547AD735F84901AEBC1D",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "3B616B53545A114029390F81CC328E9C105C",
                "expanded": true
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "shield",
                    "target": "activeContext"
                },
                "indent": 0,
                "uid": "B66132C8273E064CF838D106D8166D4A78D8"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "dig"
                },
                "indent": 0,
                "uid": "677571FD6BEA9447521875E023ACEEA9DF09"
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "I wiggle my termite legs to try to get some dirt out of the way, and it doesn't work. I press my head down and try to squeeze it between two bigger grains of dirt, but I can't get them to move. Rachel speaks into our heads,<Does anyone know how to get these dumb termite legs to dig?>\nAx responded,<I am having trouble too. If we can find something that is casting a shadow in the force field tha't slightly elevated from the ground, we may be able to get under it.>"
                    },
                    "position": 0,
                    "characterId": "9D3AF5CB63721244547AD735F84901AEBC1D",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "CA50D2C0636753437079AD48A6DD763BB916",
                "expanded": true
            },
            {
                "id": "gs.ChangeBooleanVariables",
                "params": {
                    "target": 0,
                    "targetReferenceDomain": "com.degica.vnm.default",
                    "targetReference": {
                        "index": 0,
                        "scope": 1,
                        "domain": "com.degica.vnm.default"
                    },
                    "targetVariable": {
                        "index": 0,
                        "scope": 1,
                        "domain": "com.degica.vnm.default"
                    },
                    "targetRangeScope": 0,
                    "rangeStart": 0,
                    "rangeEnd": 0,
                    "value": 1
                },
                "indent": 0,
                "uid": "AFA0A7257277354B776B8B98768EA4E3CF2B"
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "shield",
                    "target": "activeContext"
                },
                "indent": 0,
                "uid": "B7C0A5738027F2401B4B639183B3D2BC92C1"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "pine needle"
                },
                "indent": 0,
                "uid": "60549F5E05BC3541AF69F296263EC3B9E270"
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "Listening to ax, I start searching for something that may be lifted off the ground slightly. It's rough without eyes, but eventually I find a pine needle, It's curve peeling part of it away from the ground, that I can just squeeze under. I can hear the voice stronger now. I almost sounds like my mom. I hammer my six legs across the dirt boulders toward the voice calling in my head. My body is moving on its own. I'm like a passenger in a car, unable to reach the wheel. On and on toward the building, uninterested in asking whether my friends made it through. I don't see the building, but I do know where I'm going.\n<What are we...> Marco trails off.\n<Guys? Um...> Rachel said.\nI know the entrance is just ahead, guarded by soldier termites. I don't fear them. I enter the tunnel, the smells are familiar. I know this place. I'm home. This is where I belong. I can smell the other soldiers. \nWe are the colony. \nThe colony.\nI need to go down that tunnel. I head through it, up at a sharp angle, passing a worker who extrudes wood pulp. Grateful, I gobble it up. Reading the communications in the wood pulp, I understand my orders. I race along the tunnels, cut through dried wood. I pass several tunnels, they are not where I have been ordered."
                    },
                    "position": 0,
                    "characterId": "9D3AF5CB63721244547AD735F84901AEBC1D",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "09864DCE4A5B4241ED58529996C18A35ADE9",
                "expanded": true
            },
            {
                "id": "gs.ClearMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 30,
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "indent": 0,
                "uid": "27C45C88514A4146490BA0C45FFC72D55D0C"
            },
            {
                "id": "vn.Choice",
                "params": {
                    "action": {
                        "type": 0,
                        "bindValue": 0,
                        "bindValueVariable": {
                            "scope": 0,
                            "index": 0
                        },
                        "commonEventId": 0,
                        "label": "what",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": null,
                        "defaultText": "What am I doing?"
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 0,
                    "box": {
                        "x": 0,
                        "y": 0,
                        "size": {
                            "width": 300,
                            "height": 50
                        }
                    },
                    "defaultChoice": 0
                },
                "indent": 0,
                "uid": "20C03D1E5DEA9641A93983E872BBC71A9171"
            },
            {
                "id": "vn.ShowChoices",
                "params": {},
                "indent": 0,
                "uid": "8E80750F5EC64243FC3AC944DFE502535F98"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "what"
                },
                "indent": 0,
                "uid": "FEADC24C8A2EA5471E4BEC788BCDAC6EF585"
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "I hear an alien voice. I need to ignore it. I have my orders."
                    },
                    "position": 0,
                    "characterId": "9D3AF5CB63721244547AD735F84901AEBC1D",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "7847BBC16B2EF94E803AEE691E561D714958",
                "expanded": true
            },
            {
                "id": "gs.ClearMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 30,
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "indent": 0,
                "uid": "D111CB4010F6E1489538AFD284501DFA5CCB"
            },
            {
                "id": "vn.Choice",
                "params": {
                    "action": {
                        "type": 0,
                        "bindValue": 0,
                        "bindValueVariable": {
                            "scope": 0,
                            "index": 0
                        },
                        "commonEventId": 0,
                        "label": "no",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": null,
                        "defaultText": "NO!"
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 0,
                    "box": {
                        "x": 0,
                        "y": 0,
                        "size": {
                            "width": 300,
                            "height": 50
                        }
                    },
                    "defaultChoice": 0
                },
                "indent": 0,
                "uid": "B1F8F2875D15C84FA66BFA27905E236AA9E9"
            },
            {
                "id": "vn.ShowChoices",
                "params": {},
                "indent": 0,
                "uid": "53036F1771B232408A996587A196AB68F249"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "no"
                },
                "indent": 0,
                "uid": "DFF3C4C84FD0D0424418520586AEF4272E10"
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "The same voice. I don't speak it's language. I need to move on."
                    },
                    "position": 0,
                    "characterId": "9D3AF5CB63721244547AD735F84901AEBC1D",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "0EEA660626B7154412683D25BE556A28F572",
                "expanded": true
            },
            {
                "id": "vn.Choice",
                "params": {
                    "action": {
                        "type": 0,
                        "bindValue": 0,
                        "bindValueVariable": {
                            "scope": 0,
                            "index": 0
                        },
                        "commonEventId": 0,
                        "label": "let",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": null,
                        "defaultText": "NO NO NO NO NO NO NO NO! Let me go!"
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 0,
                    "box": {
                        "x": 0,
                        "y": 0,
                        "size": {
                            "width": 300,
                            "height": 50
                        }
                    },
                    "defaultChoice": 0
                },
                "indent": 0,
                "uid": "8D85D2F882F6B948A48B8F58DAA04AFFA7A1"
            },
            {
                "id": "vn.ShowChoices",
                "params": {},
                "indent": 0,
                "uid": "C80471805A11E146631ADAC107F5BB5A53CB"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "let"
                },
                "indent": 0,
                "uid": "478102302AD3A1449E4B3D586057F5E852B3"
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "I feel queasy. Something is wrong. \nI have my orders. I power on down the tunnels, turning when I need to, always moving toward the goal."
                    },
                    "position": 0,
                    "characterId": "9D3AF5CB63721244547AD735F84901AEBC1D",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "20C0D3045B19824B0C886845DC6B3FFF73F8",
                "expanded": true
            },
            {
                "id": "gs.ClearMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 30,
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "indent": 0,
                "uid": "51C96544423E28432A6A8527327A047D72D2"
            },
            {
                "id": "vn.Choice",
                "params": {
                    "action": {
                        "type": 0,
                        "bindValue": 0,
                        "bindValueVariable": {
                            "scope": 0,
                            "index": 0
                        },
                        "commonEventId": 0,
                        "label": "three",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": null,
                        "defaultText": "NO!"
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 0,
                    "box": {
                        "x": 0,
                        "y": 0,
                        "size": {
                            "width": 300,
                            "height": 50
                        }
                    },
                    "defaultChoice": 0
                },
                "indent": 0,
                "uid": "897BFFEF2DF33148BF8A9647C64456435050"
            },
            {
                "id": "vn.Choice",
                "params": {
                    "action": {
                        "type": 0,
                        "bindValue": 0,
                        "bindValueVariable": {
                            "scope": 0,
                            "index": 0
                        },
                        "commonEventId": 0,
                        "label": "three",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": null,
                        "defaultText": "LET ME GO!"
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 0,
                    "box": {
                        "x": 0,
                        "y": 0,
                        "size": {
                            "width": 300,
                            "height": 50
                        }
                    },
                    "defaultChoice": 0
                },
                "indent": 0,
                "uid": "98D6F902475FE44A9F2B154434853B52C607"
            },
            {
                "id": "vn.Choice",
                "params": {
                    "action": {
                        "type": 0,
                        "bindValue": 0,
                        "bindValueVariable": {
                            "scope": 0,
                            "index": 0
                        },
                        "commonEventId": 0,
                        "label": "three",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": null,
                        "defaultText": "NO! NO!NO! NO! NO! NO! NO! NO!"
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 0,
                    "box": {
                        "x": 0,
                        "y": 0,
                        "size": {
                            "width": 300,
                            "height": 50
                        }
                    },
                    "defaultChoice": 0
                },
                "indent": 0,
                "uid": "CAACFC7876E95748EA6B6EC784E9496F0CA7"
            },
            {
                "id": "vn.ShowChoices",
                "params": {},
                "indent": 0,
                "uid": "26DDB9046D08C34FEB7B6D81DF9480D5A6BF"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "three"
                },
                "indent": 0,
                "uid": "C106341C51A037441F8A78A37A101017A187"
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "I...have...my orders."
                    },
                    "position": 0,
                    "characterId": "9D3AF5CB63721244547AD735F84901AEBC1D",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "DDD621EC7B224441B2299B5234F29CF5AD8E",
                "expanded": true
            },
            {
                "id": "gs.ClearMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 30,
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "indent": 0,
                "uid": "83CC55A94D2B53459749A2901893F7D4977F"
            },
            {
                "id": "vn.Choice",
                "params": {
                    "action": {
                        "type": 0,
                        "bindValue": 0,
                        "bindValueVariable": {
                            "scope": 0,
                            "index": 0
                        },
                        "commonEventId": 0,
                        "label": "four",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": null,
                        "defaultText": "Help me!"
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 0,
                    "box": {
                        "x": 0,
                        "y": 0,
                        "size": {
                            "width": 300,
                            "height": 50
                        }
                    },
                    "defaultChoice": 0
                },
                "indent": 0,
                "uid": "1A255B36433B074E451974815938B092D325"
            },
            {
                "id": "vn.Choice",
                "params": {
                    "action": {
                        "type": 0,
                        "bindValue": 0,
                        "bindValueVariable": {
                            "scope": 0,
                            "index": 0
                        },
                        "commonEventId": 0,
                        "label": "four",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": null,
                        "defaultText": "Help me! Help me help me help me help me!"
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 0,
                    "box": {
                        "x": 0,
                        "y": 0,
                        "size": {
                            "width": 300,
                            "height": 50
                        }
                    },
                    "defaultChoice": 0
                },
                "indent": 0,
                "uid": "9B3E61A55BFE6147C47A0C5237D1FEB2476A"
            },
            {
                "id": "vn.Choice",
                "params": {
                    "action": {
                        "type": 0,
                        "bindValue": 0,
                        "bindValueVariable": {
                            "scope": 0,
                            "index": 0
                        },
                        "commonEventId": 0,
                        "label": "four",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": null,
                        "defaultText": "I can't stop! I can't control it! SOMEBODY HELP ME!"
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 0,
                    "box": {
                        "x": 0,
                        "y": 0,
                        "size": {
                            "width": 300,
                            "height": 50
                        }
                    },
                    "defaultChoice": 0
                },
                "indent": 0,
                "uid": "7E137DDC9063464E7A493EA8818F899F6A31"
            },
            {
                "id": "vn.ShowChoices",
                "params": {},
                "indent": 0,
                "uid": "1B1877756B2DC842823A33692EC6C3AF3AA5"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "four"
                },
                "indent": 0,
                "uid": "146E5E3B9ADAF8415D1A14F733D64A60CFAE"
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "That's...that's my voice. That's the voice of the human named Cassie!\nMe. It's me.\nIt's me!\nI'm Cassie. I know who I am. I'm cassie. I.\nI try to move my legs, but they're already moving another way. I try to stop them.\nNo. It's not working. It doesn't matter that I found myself, I can't affect the termite body.\nA will stronger than mine is directing it, and suddenly it emerged into an open cavern, the size of an auditorium to the termite, but not much bigger than both of my thumbs.\nAnd...I know who I came to. I know who is in control of this termite body instead of me. I know who shoved me aside. It's her.\nShe's vast. Huge beyond comprehension. A termite head and body with useless waving legs, and attached to them a monstrous pulsating sack, as big as a blimp.\nWorkers carry eggs away from her. The queen. I'm in the queen's chamber.\nI can feel her power, this world is hers, we are all her slaves. Worse than slaves, we have no will.\nNext to her, even knowing who I am, I feel weak and pathetic. Unable to exert any control over this body I am inhabiting.\nShe has orders for me, and I must follow them. \nI must protect the egg carrying workers. \n<Rachel. Marco. Ax. Is anybody there?>\nRachel's voice emerges,<No...I...no. No no no no no! NO!>\n<Rachel, the queen is controlling you,> I said.\n<I...I can't...my body...it just.> That was Marco. <She's got me! I can't say no! I can't stop!>\nWhile I'm listening to them, my own legs are marching on. I find two workers and fall in step behind them. \nI have to protect them, there may be enemies. We walk along the queen, toward her head.\n<The queen! We have to destroy her! It's the only way,> Rachel spoke into my mind.\nShe's right. I need to get rid of the queen. The only way. I have to do it."
                    },
                    "position": 0,
                    "characterId": "9D3AF5CB63721244547AD735F84901AEBC1D",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "C4439E7064E53942B93910E05881101902B0",
                "expanded": true
            },
            {
                "id": "gs.ClearMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 30,
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "indent": 0,
                "uid": "E509489721B6664DBB5A7D41CD3FA72A06D7"
            },
            {
                "id": "vn.Choice",
                "params": {
                    "action": {
                        "type": 0,
                        "bindValue": 0,
                        "bindValueVariable": {
                            "scope": 0,
                            "index": 0
                        },
                        "commonEventId": 0,
                        "label": "kill",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": null,
                        "defaultText": "Kill her."
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 0,
                    "box": {
                        "x": 0,
                        "y": 0,
                        "size": {
                            "width": 300,
                            "height": 50
                        }
                    },
                    "defaultChoice": 0
                },
                "indent": 0,
                "uid": "DF6EC350589A6745DC2A6E932B5F6D7E01B5"
            },
            {
                "id": "vn.ShowChoices",
                "params": {},
                "indent": 0,
                "uid": "42425F7360C56646D46A0760CEF7D7D5AFC8"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "kill"
                },
                "indent": 0,
                "uid": "CBAE11304588C04BE2782882F1F3612BADA1"
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "I know I need to do it. \nThis body isn't mine, I can't exert my will.\nI know I'm walking just past the queen's head. Just to my right. I can sense it. Less than half an inch away."
                    },
                    "position": 0,
                    "characterId": "9D3AF5CB63721244547AD735F84901AEBC1D",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "167A30E82411154E765AACE245AB4732DDFE",
                "expanded": true
            },
            {
                "id": "gs.ClearMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 30,
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "indent": 0,
                "uid": "520F96C1176D43408A19EF462944DE6BC621"
            },
            {
                "id": "vn.Choice",
                "params": {
                    "action": {
                        "type": 0,
                        "bindValue": 0,
                        "bindValueVariable": {
                            "scope": 0,
                            "index": 0
                        },
                        "commonEventId": 0,
                        "label": "head",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": null,
                        "defaultText": "The queen's head. Feelers. Eyes. Just like an ant. It's right there."
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 0,
                    "box": {
                        "x": 0,
                        "y": 0,
                        "size": {
                            "width": 300,
                            "height": 50
                        }
                    },
                    "defaultChoice": 0
                },
                "indent": 0,
                "uid": "A380A6D25223B74C6109C7E6E9DD0431E53E"
            },
            {
                "id": "vn.ShowChoices",
                "params": {},
                "indent": 0,
                "uid": "CBB6F2554D31F64BCE4B5061C5A19BF8AC22"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "head"
                },
                "indent": 0,
                "uid": "B57D130F7B50C148180AA308D44251E4D772"
            },
            {
                "id": "vn.Choice",
                "params": {
                    "action": {
                        "type": 0,
                        "bindValue": 0,
                        "bindValueVariable": {
                            "scope": 0,
                            "index": 0
                        },
                        "commonEventId": 0,
                        "label": "now",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": null,
                        "defaultText": "NOW!"
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 0,
                    "box": {
                        "x": 0,
                        "y": 0,
                        "size": {
                            "width": 300,
                            "height": 50
                        }
                    },
                    "defaultChoice": 0
                },
                "indent": 0,
                "uid": "5870C0D42280774C700B83E1E4984B613E4D"
            },
            {
                "id": "vn.Choice",
                "params": {
                    "action": {
                        "type": 0,
                        "bindValue": 0,
                        "bindValueVariable": {
                            "scope": 0,
                            "index": 0
                        },
                        "commonEventId": 0,
                        "label": "now",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": null,
                        "defaultText": "Do it!"
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 0,
                    "box": {
                        "x": 0,
                        "y": 0,
                        "size": {
                            "width": 300,
                            "height": 50
                        }
                    },
                    "defaultChoice": 0
                },
                "indent": 0,
                "uid": "72117FBE2FA4784FC14A03A6AA4F219FCB1E"
            },
            {
                "id": "vn.ShowChoices",
                "params": {},
                "indent": 0,
                "uid": "9E07675963F0D9497558C27631CADE954450"
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "name": "killher",
                        "scope": 1,
                        "index": 0,
                        "changed": true,
                        "domain": "com.degica.vnm.default"
                    },
                    "targetScope": 0,
                    "targetRange": {
                        "start": 0,
                        "end": 0
                    },
                    "targetReferenceDomain": "com.degica.vnm.default",
                    "targetReference": {
                        "index": 0,
                        "scope": 1,
                        "domain": "com.degica.vnm.default"
                    },
                    "operation": 0,
                    "source": 0,
                    "sourceValue": 0,
                    "sourceRandom": {
                        "start": 0,
                        "end": 0
                    },
                    "sourceScope": 0,
                    "sourceVariable": {
                        "index": 0,
                        "scope": 1,
                        "domain": "com.degica.vnm.default"
                    },
                    "sourceReferenceDomain": "com.degica.vnm.default",
                    "sourceReference": {
                        "index": 0,
                        "scope": 1,
                        "domain": "com.degica.vnm.default"
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "indent": 0,
                "uid": "4C7740813DF76242D9496EB4DEF3029A7D2B"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "now"
                },
                "indent": 0,
                "uid": "0FF5ABD6330E754450586C59EE258CD9D1B3"
            },
            {
                "id": "vn.Choice",
                "params": {
                    "action": {
                        "type": 0,
                        "bindValue": 0,
                        "bindValueVariable": {
                            "scope": 0,
                            "index": 0
                        },
                        "commonEventId": 0,
                        "label": "killy",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": null,
                        "defaultText": "KILL"
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 0,
                    "box": {
                        "x": 0,
                        "y": 0,
                        "size": {
                            "width": 300,
                            "height": 50
                        }
                    },
                    "defaultChoice": 0
                },
                "indent": 0,
                "uid": "8A4655808F8EB64DE4583B94C885C617EE82"
            },
            {
                "id": "gs.Condition",
                "params": {
                    "variable": {
                        "scope": 1,
                        "index": 0,
                        "domain": "com.degica.vnm.default"
                    },
                    "numberValue": 6,
                    "textValue": "",
                    "switchValue": 0,
                    "valueType": 0,
                    "operation": 3
                },
                "indent": 0,
                "uid": "C918D1E3487FF14AA94841F1D2A871421C39"
            },
            {
                "id": "vn.Choice",
                "params": {
                    "action": {
                        "type": 0,
                        "bindValue": 0,
                        "bindValueVariable": {
                            "scope": 0,
                            "index": 0
                        },
                        "commonEventId": 0,
                        "label": "ant",
                        "switch": {
                            "scope": 1,
                            "index": 0
                        },
                        "scene": null
                    },
                    "text": {
                        "lcId": null,
                        "defaultText": "ANT!"
                    },
                    "label": "",
                    "enabled": 1,
                    "positionType": 0,
                    "box": {
                        "x": 0,
                        "y": 0,
                        "size": {
                            "width": 300,
                            "height": 50
                        }
                    },
                    "defaultChoice": 0
                },
                "indent": 1,
                "uid": "500FD0CB5008F744549A2C79300EA7C13189"
            },
            {
                "id": "vn.ShowChoices",
                "params": {},
                "indent": 0,
                "uid": "29DDF2D36A91704C22899019585DCE9D5F98"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "killy"
                },
                "indent": 0,
                "uid": "8E39A21F2D0F1240DC682AB65C62372D1D25"
            },
            {
                "id": "gs.ChangeNumberVariables",
                "params": {
                    "target": 0,
                    "targetVariable": {
                        "index": 0,
                        "scope": 1,
                        "domain": "com.degica.vnm.default"
                    },
                    "targetScope": 0,
                    "targetRange": {
                        "start": 0,
                        "end": 0
                    },
                    "targetReferenceDomain": "com.degica.vnm.default",
                    "targetReference": {
                        "index": 0,
                        "scope": 1,
                        "domain": "com.degica.vnm.default"
                    },
                    "operation": 1,
                    "source": 0,
                    "sourceValue": 1,
                    "sourceRandom": {
                        "start": 0,
                        "end": 0
                    },
                    "sourceScope": 0,
                    "sourceVariable": {
                        "index": 0,
                        "scope": 1,
                        "domain": "com.degica.vnm.default"
                    },
                    "sourceReferenceDomain": "com.degica.vnm.default",
                    "sourceReference": {
                        "index": 0,
                        "scope": 1,
                        "domain": "com.degica.vnm.default"
                    }
                },
                "indent": 0,
                "uid": "AA3AFA2C29987547BF6868522F1031374537"
            },
            {
                "id": "gs.JumpToLabel",
                "params": {
                    "name": "now",
                    "target": "activeContext"
                },
                "indent": 0,
                "uid": "6D20A327597DD646185B25A6C526FB2D69C3"
            },
            {
                "id": "gs.Label",
                "params": {
                    "name": "ant"
                },
                "indent": 0,
                "uid": "1E75C21E55E8944F881A6DE903E5334B6FF4"
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": null,
                        "defaultText": "Ant! Ant! I scream ant in my head to convince myself she's an ant. Ant! \nAnt! Destroy! Destroy the ant! \nI climb over a dozen termites to were tending to her, but I can feel my will weakening. I can't do it. I have to kill he-no \nI have to kill the ant. The ants are the enemies I must protect the eggs from. I need to kill the ant. To save her.\nI feel my antenae brush her. I open my massive pincers, and-"
                    },
                    "position": 0,
                    "characterId": "9D3AF5CB63721244547AD735F84901AEBC1D",
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "indent": 0,
                "uid": "71F3337D7B6AD943E09B6E66E1A6FC247338",
                "expanded": true
            },
            {
                "id": "gs.ClearMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 30,
                    "fieldFlags": {
                        "duration": 1
                    }
                },
                "indent": 0,
                "uid": "F9E4718E61CF0544496BE412BB1842DA0970"
            }
        ],
        "livePreviewDisabled": false,
        "booleanVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ],
        "numberVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ],
        "stringVariables": [
            {
                "name": "",
                "index": 0,
                "scope": 0
            }
        ]
    },
    "summary": [
        "name",
        "type",
        "parentId",
        "chapterUid",
        "order"
    ],
    "externalItems": []
}