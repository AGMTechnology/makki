import { BackgroundImage, Card, Image, Text, Group, Badge, Center, Button } from '@mantine/core';
import { IconGasStation, IconGauge, IconManualGearbox, IconUsers } from '@tabler/icons-react';
import classes from './FeaturesCard.module.css';
import image from "../assets/Audi_Q5.jpg"

export const FeaturesCard = ({data} : any) => {

  console.log(data)
  const mockdata = [
    { label: data.Place, icon: IconUsers },
    { label: data.Kilo, icon: IconGauge },
    { label: data.Transmission, icon: IconManualGearbox },
    { label: data.Carburant, icon: IconGasStation },
  ];

  const features = mockdata.map((feature) => (
    <Center key={feature.label}>
      <feature.icon size="1.05rem" className={classes.icon} stroke={1.5} />
      <Text size="xs">{feature.label}</Text>
    </Center>
  ));

  return (
    <Card withBorder radius={"md"} className={classes.card}>
      <BackgroundImage
        src={data.image}
        style={{padding:0, margin:0}}
      >
        <Card.Section className={classes.imageSection}>
          <Image style={{ opacity: 0 }} w="auto"
            fit="contain" src={image} alt="Tesla Model S" height={180} />
        </Card.Section>
      </BackgroundImage>


      <Group justify="space-between" mt="md">
        <div>
          <Text fw={500}>{data.title}</Text>
          <Text fz="xs" c="dimmed">
            {data.Argument} - {data.Année}
          </Text>
        </div>
        <Badge variant="outline">Garantie : {data.Garantie}</Badge>
      </Group>

      <Card.Section style={{ borderTop: "1px solid #4d4f6683" }} className={classes.section} mt="md">
        <Text fz="sm" c="dimmed" className={classes.label}>
          Basic configuration
        </Text>

        <Group gap={8} mb={-8}>
          {features}
        </Group>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Group gap={30}>
          <div>
            <Text fz="xl" fw={700} style={{ lineHeight: 1 }}>
              {data.Prix}
            </Text>
          </div>

          <Button radius="sm" style={{ flex: 1, color: "#2b2a28" }}>
            Acheter
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
}

export default FeaturesCard;