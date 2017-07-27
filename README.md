###Introduction
*MetaClickerFoundation* is a "Cookie-Clicker-like" idle game framework. 
The reason it's called a "framework" rather than a "template" is that,
all the game logics are described in JSON files rather than being hard-coded
into the Javascript code. 

This provides several advantages:
- Makes game logic easy to tweak, ideal for large scale and/or expermental game creating
- Allows different part of the game mechanics (currency, production, etc.) being written
separately, rather than everything being mixed up and create hard-to-manage code.
- As no additional effort is needed to support loading multiple game logic packs (called "data packs")
in a single game instance, this is supported, making games under this framework highly
moddable without the need of tweaking the base data pack or the core game code.
- Thanks to the way Javascript works, it's possible to define simple functions in the JSON
file, making the framework more powerful
- I do believe that data packs and css packs ("skin packs") doesn't count as part of the foundation,
considering that they are technically asset packs, and attaching and modifying these packs doesn't
alter the core game code. Therefore, despite MetaClickerFoundation itself is licensed under AGPL 3.0,
data and skin packs doesn't necessarily be released under this license. I suggest that those should be
released under a proper license suitable for artworks rather than programs. For example, CC-BY NC SA 4.0
would be a good starting point, since it clearfies the idea that it's okay to create derived works,
while still restricts the use of the work in commercial purpose without asking.