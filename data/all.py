import os
import data_export as e
import data_import as i
import data_marketsize as m
import data_partner as p

# marketsize
for row in m.data:
    name = row[0]
    group = row[1]
    year = row[2]
    volume = row[3]

    os.system('cd ~/Desktop/Projects/khidi; ~/go/bin/khidid tx khidi hy-add-marketsize "%s" "%s" "%s" "%s" -y --from hyunchang' % (name, year, group, volume))

# import
for row in i.data:
    name = row[0]
    group = row[1]
    year = row[2]
    volume = row[3]

    os.system('cd ~/Desktop/Projects/khidi; ~/go/bin/khidid tx khidi hy-add-import "%s" "%s" "%s" "%s" -y --from hyunchang' % (name, year, group, volume))

# partner
for row in p.data:
    buyer = row[0]
    seller = row[1]
    year = row[2]
    proportion = row[3]

    os.system('cd ~/Desktop/Projects/khidi; ~/go/bin/khidid tx khidi hy-add-partner "%s" "%s" "%s" "%s" -y --from hyunchang' % (buyer, seller, year, proportion))

# export
for row in e.data:
    name = row[0]
    group = row[1]
    year = row[2]
    volume = row[3]

    os.system('cd ~/Desktop/Projects/khidi; ~/go/bin/khidid tx khidi hy-add-export "%s" "%s" "%s" "%s" -y --from hyunchang' % (name, year, group, volume))
